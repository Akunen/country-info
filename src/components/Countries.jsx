
import Weather from './Weather';

const Countries = ({ countries, handleShow}) => {
  if (countries.length > 10) {
    return <p>too many matches, specify another filter</p>;
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => <li key={country.name.common}>{country.name.common}
        <button onClick={()=> handleShow(country.name.common)}>show</button></li>)}
      </ul>
    );
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img className="flags" src={country.flags.png} alt={`flag of ${country.name.common}`}/>
        <Weather capital={country.capital} />
      
      </div>
    );
  } else {
    return <p>no matches, specify another filter</p>;
  }
}


export default Countries;
