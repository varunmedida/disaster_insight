import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MarkerMap from './components/Markermap/Markermap';
import Heatmap from './components/Heatmap/Heatmap';
import EmDatData from './components/Emdat/EmDatData'; // Import the EmDatData component

function App() {
  const [disasters, setDisasters] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedView, setSelectedView] = useState('markers'); // Default view

  // Fetch disasters based on the selected view and disaster type
  const fetchDisasters = () => {
    let apiUrl = 'http://localhost:8080/api/disasters';
    if (selectedView === 'markers' && selectedType !== 'all') {
      apiUrl = `http://localhost:8080/api/disasters/type/${selectedType}`;
    } else if (selectedView === 'heatmap') {
      apiUrl = 'http://localhost:8080/api/disasters/heatmap';
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDisasters(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchDisasters();
  }, [selectedType, selectedView]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar selectedView={selectedView} onViewChange={handleViewChange} />

      <div className='w-full md:w-3/4 p-6'>
        {selectedView === 'markers' && (
          <MarkerMap
            disasters={disasters}
            selectedType={selectedType}
            onTypeChange={handleTypeChange}
          />
        )}
        {selectedView === 'heatmap' && <Heatmap disasters={disasters} />}
        {selectedView === 'emdat' && <EmDatData />}{' '}
        {/* Render EmDatData component */}
      </div>
    </div>
  );
}

export default App;
