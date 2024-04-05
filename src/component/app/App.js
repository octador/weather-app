import './App.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


  const apikey = process.env.REACT_APP_WEATHER_API_KEY;

  const [arrayDay, setArrayDay] = useState([]);
  const [dayid, setDayid] = useState(0)

  // Fonction pour récupérer les données météorologiques
  useEffect(() => {

    const daysWeather = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=Lyon&days=5&aqi=no&alerts=no`;

    axios.get(daysWeather)
      .then(function ({ data }) {
        setArrayDay(data);
        // console.log(arrayDay);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  function handleClickDay(event) {

    document.querySelector('.selectorday').classList.remove("selectorday");
    event.target.classList.add("selectorday");
    console.log(event.target.id);
    setDayid(event.target.id);

  }

  // console.log(arrayDay);

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">

          {arrayDay.forecast ?
            <WeatherCard degres={arrayDay.forecast.forecastday[dayid].day.avgtemp_c}
              city={arrayDay.location.name}
              speed={arrayDay.forecast.forecastday[dayid].day.maxwind_kph}
              icon={arrayDay.forecast.forecastday[dayid].day.condition.icon}
              handleClickDay={handleClickDay}
            />
            :
            <WeatherCard degres="" />
          }

        </div>
      </div>
    </div>
  );
}

export default App;
