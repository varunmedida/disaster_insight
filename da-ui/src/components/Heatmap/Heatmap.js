import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import L from 'leaflet';

const Heatmap = ({ disasters }) => {
  useEffect(() => {
    let map;

    try {
      // Initialize the Leaflet map
      map = L.map('heatmap', {
        center: [20, 0],
        zoom: 2,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
          }),
        ],
      });

      // Filter and prepare heatmap data (ensure latitude and longitude exist)
      const heatData = disasters
        .filter((disaster) => disaster.latitude && disaster.longitude)
        .map((disaster) => [disaster.latitude, disaster.longitude, 1]);

      // Add heat layer if we have valid data
      if (heatData.length > 0) {
        const heatLayer = L.heatLayer(heatData, {
          radius: 25,
          blur: 15,
          maxZoom: 17,
        });
        heatLayer.addTo(map);
      }
    } catch (error) {
      console.error('Error initializing heatmap:', error);
    }

    // Cleanup function to remove the map when component unmounts
    return () => {
      if (map) {
        map.remove(); // Properly remove the map instance when the component unmounts
      }
    };
  }, [disasters]);

  return <div id='heatmap' style={{ height: '500px', width: '100%' }}></div>;
};

export default Heatmap;
