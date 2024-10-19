import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon for disaster
const disasterIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ disasters }) => {
  return (
    <div className='w-full h-[500px] bg-gray-200 shadow-lg rounded-lg overflow-hidden'>
      <MapContainer center={[20, 0]} zoom={2} className='h-full w-full'>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {disasters.map((disaster) => (
          <Marker
            key={disaster.disasterNumber}
            position={[disaster.latitude, disaster.longitude]}
            icon={disasterIcon}
          >
            <Popup>
              <strong>{disaster.disasterType}</strong>
              <br />
              Country: {disaster.country}
              <br />
              Start Year: {disaster.startYear}
              <br />
              End Year: {disaster.endYear}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
