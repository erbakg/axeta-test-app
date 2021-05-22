import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { useSelector } from 'react-redux';

export const Map = () => {
  const userLat = useSelector((state) => state.UserLocationReducer.lat);
  const userLong = useSelector((state) => state.UserLocationReducer.long);
  useEffect(() => {
    setViewport({
      latitude: userLat,
      longitude: userLong,
      width: '552px',
      height: '200px',
      zoom: 10,
    });
  }, [userLat]);
  const [viewport, setViewport] = useState({
    latitude: userLat,
    longitude: userLong,
    width: '552px',
    height: '200px',
    zoom: 10,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/erbakg/ckoxzx8mh221r18k8ovyzl37l'}
      mapboxApiAccessToken={
        'pk.eyJ1IjoiZXJiYWtnIiwiYSI6ImNrb3h5cTA1bDAwZjMydm1ybWhzbHVzdGkifQ.gAPQgmmyUpyoizYQtIGaAQ'
      }
      onViewportChange={(viewport) => setViewport(viewport)}
    ></ReactMapGL>
  );
};
