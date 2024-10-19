import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const disasterIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/icons/icon.png`,
  iconSize: [18, 33],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Markermap = ({ disasters, selectedType, onTypeChange }) => {
  // Filter disasters with valid coordinates
  const validDisasters = disasters.filter(
    (disaster) => disaster.latitude && disaster.longitude
  );

  return (
    <div className='w-full h-full'>
      {/* Dropdown for disaster type selection */}
      <div className='flex justify-center mb-8'>
        <select
          value={selectedType}
          onChange={onTypeChange}
          className='p-3 border border-gray-300 rounded-md shadow-md text-gray-700'
        >
          <option value='all'>All Disasters</option>
          <option value='Flood'>Flood</option>
          <option value='Earthquake'>Earthquake</option>
          <option value='Drought'>Drought</option>
          <option value='Wildfire'>Wildfire</option>
        </select>
      </div>

      {/* Map with markers */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {validDisasters.length > 0 ? (
          validDisasters.map((disaster) => (
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
          ))
        ) : (
          <p>No disasters to display</p>
        )}
      </MapContainer>
    </div>
  );
};

export default Markermap;
