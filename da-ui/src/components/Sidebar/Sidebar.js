import React, { useState } from 'react';

const Sidebar = ({ selectedView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Hamburger menu (visible on small screens) */}
      <div className='block md:hidden p-4'>
        <button onClick={toggleSidebar} className='focus:outline-none'>
          <svg
            className='w-8 h-8 text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar (visible on larger screens or when toggled on mobile) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block bg-gray-800 text-white p-6 h-screen w-64`}
      >
        <h2 className='text-2xl font-bold mb-8'>Disaster Map</h2>
        <ul className='space-y-4'>
          <li
            className={`cursor-pointer ${
              selectedView === 'markers' ? 'bg-gray-600' : ''
            }`}
            onClick={() => onViewChange('markers')}
          >
            Marker Map
          </li>
          <li
            className={`cursor-pointer ${
              selectedView === 'heatmap' ? 'bg-gray-600' : ''
            }`}
            onClick={() => onViewChange('heatmap')}
          >
            Heatmap
          </li>
          <li
            className={`cursor-pointer ${
              selectedView === 'emdat' ? 'bg-gray-600' : ''
            }`}
            onClick={() => onViewChange('emdat')}
          >
            Em-dat Data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
