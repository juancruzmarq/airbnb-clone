import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/juancruzmarq/cl98wpm9i004414jrgi1zbblt"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
};
