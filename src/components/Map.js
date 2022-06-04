import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/lukebwood/cl3w0e219002114ry8w67s5ez"}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onMove={evt => setViewport(evt.viewState)}
      trackResize
    ></ReactMapGL>
  );
}

export default Map;
