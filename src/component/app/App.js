import './App.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY;
  const [arrayDay, setArrayDay] = useState(null);
  const [dayid, setDayid] = useState(0);
 const [position,setPosition] =useState(null)
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données météorologiques
  useEffect(() => {
    const daysWeather = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${position}&days=5&aqi=no&alerts=no`;

    axios.get(daysWeather)
      .then(function ({ data }) {
        setArrayDay(data);
      })
      .catch(function (error) {
        console.error('Error fetching weather data:', error);
        // Gérer l'erreur ici
      });
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('La géolocalisation n\'est pas prise en charge par votre navigateur.');
      return;
    }

    const successHandler = (position) => {
      setPosition(`${position.coords.latitude},${position.coords.longitude}`);
    };
    console.log(position);
    const errorHandler = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, [position]);

  function handleClickDay(event) {
    document.querySelector('.selectorday').classList.remove("selectorday");
    event.target.classList.add("selectorday");
    setDayid(event.target.id);
  }
  
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          {arrayDay === null ? <p>Chargement...</p> :
            <WeatherCard degres={arrayDay.forecast.forecastday[dayid].day.avgtemp_c}
              city={arrayDay.location.name}
              speed={arrayDay.forecast.forecastday[dayid].day.maxwind_kph}
              icon={arrayDay.forecast.forecastday[dayid].day.condition.icon}
              handleClickDay={handleClickDay}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
