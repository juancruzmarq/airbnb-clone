import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
function MapComponent({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //Transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object
  // The map function can return a value for each element in the array
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  console.log(center);
  console.log(coordinates);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/juancruzmarq/cl995jqrn001u14nrbmqqtr1m"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e) => setViewState(e.viewState)}
      {...viewState}
      // The latitude and longitude of the center of locations coordinates
      {...center}
    ></ReactMapGL>
  );
}

export default MapComponent;
