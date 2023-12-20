import { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data));
  }
    , []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleShow = (countryName) => {
    const selectedCountry = countries.find(country => country.name.common === countryName);
    setSearch(selectedCountry.name.common);
  };

  const filteredCountries = search === ''
    ? []
    : countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <h1>Maiden tiedot</h1>
      <div>
        find countries <input value={search} onChange={handleSearch} />
        <Countries countries={filteredCountries} handleShow={handleShow}  />
      </div>
    </div>
  );
};

export default App;
