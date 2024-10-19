import React, { useState } from 'react';

const EmDatData = () => {
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false); // Track the processing of file
  const [fileDownloaded, setFileDownloaded] = useState(false); // Track if file is downloaded
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // To track the success/failure of the response

  // Function to handle file download
  const handleFileDownload = () => {
    setLoading(true);
    setMessage('');

    // Validate year input
    if (fromYear && toYear && fromYear <= toYear) {
      // Make API request to download the Em-Dat file
      fetch(
        `http://localhost:8080/api/emdat?fromYear=${fromYear}&toYear=${toYear}`
      )
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.status === 'success') {
            setMessage('File downloaded successfully.');
            setIsSuccess(true); // Indicate it's a success message
            setFileDownloaded(true); // Set file downloaded to true
          } else {
            setMessage(`Error: ${data.message}`);
            setIsSuccess(false); // Indicate it's an error message
          }
        })
        .catch((error) => {
          setLoading(false);
          setMessage(`Error: ${error.message}`);
          setIsSuccess(false); // Indicate it's an error message
        });
    } else {
      setLoading(false);
      setMessage('Please enter a valid year range.');
      setIsSuccess(false); // Error case
    }
  };

  // Function to process the downloaded file (run the Python script)
  const handleProcessFile = () => {
    setProcessing(true); // Start processing, show loader
    setMessage('');

    // Trigger the API to process the downloaded file
    fetch('http://localhost:8080/api/process-file')
      .then((response) => response.json())
      .then((data) => {
        setProcessing(false); // Stop processing after response
        if (data.status === 'success') {
          setMessage(`Success: ${data.result}`);
          setIsSuccess(true); // Indicate success
        } else {
          setMessage(`Error: ${data.message}`);
          setIsSuccess(false); // Indicate failure
        }
      })
      .catch((error) => {
        setProcessing(false); // Stop processing
        setMessage(`Error: ${error.message}`);
        setIsSuccess(false); // Indicate failure
      });
  };

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>
        Select Year Range for Em-dat Data
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mb-4'>
          <label htmlFor='fromYear' className='block text-gray-700'>
            From Year
          </label>
          <input
            type='number'
            id='fromYear'
            value={fromYear}
            onChange={(e) => setFromYear(e.target.value)}
            className='border border-gray-300 p-2 rounded-md w-full'
            placeholder='Enter from year'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='toYear' className='block text-gray-700'>
            To Year
          </label>
          <input
            type='number'
            id='toYear'
            value={toYear}
            onChange={(e) => setToYear(e.target.value)}
            className='border border-gray-300 p-2 rounded-md w-full'
            placeholder='Enter to year'
            required
          />
        </div>

        <button
          type='button'
          onClick={handleFileDownload}
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
          disabled={loading || processing} // Disable while loading or processing
        >
          {loading ? 'Downloading...' : 'Download Data'}
        </button>
      </form>

      {/* Show the "Process File" button after the file is downloaded */}
      {fileDownloaded && !processing && (
        <button
          type='button'
          onClick={handleProcessFile}
          className='mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
          disabled={processing}
        >
          {processing ? 'Processing...' : 'Update Database'}
        </button>
      )}

      {/* Show loader during processing */}
      {processing && (
        <div className='mt-4'>
          <div className='loader'></div> {/* Add your custom loader here */}
        </div>
      )}

      {/* Show message (success or error) */}
      {message && (
        <div
          className={`mt-4 p-4 ${
            isSuccess ? 'bg-green-100' : 'bg-red-100'
          } rounded-md`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default EmDatData;
