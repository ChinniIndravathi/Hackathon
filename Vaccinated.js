// Vaccinated.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vaccinated() {
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country
  const [vaccinationData, setVaccinationData] = useState([]); // State for fetched vaccination data

  useEffect(() => {
    // Fetch data when selectedCountry changes
    if (selectedCountry) {
      axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${selectedCountry}`)
        .then(response => {
          setVaccinationData(response.data.timeline);
        })
        .catch(error => {
          console.error('Error fetching vaccination data: ', error);
        });
    }
  }, [selectedCountry]);

  return (
    <div>
      <h1>Vaccinated</h1>
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        {/* Populate dropdown with country options */}
        <option value="">Select Country</option>
        {/* You can fetch country list from another API or hardcode it */}
      </select>
      <div>
        {/* Render line chart using vaccinationData */}
      </div>
    </div>
  );
}

export default Vaccinated;
