import './App.css';
import Header from '../header/Header';
import WeatherCard from '../weatherCard/WeatherCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


  const apikey = process.env.REACT_APP_WEATHER_API_KEY;

  const [arrayDay, setArrayDay] = useState([]);

  // Récupération du jour de la semaine
  const day1 = new Date();
  const options = { weekday: "long" };
  const dayName = new Intl.DateTimeFormat("en-US", options).format(day1);

  // Fonction pour récupérer les données météorologiques
  useEffect(() => {
    
    const daysWeather = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=Lyon&days=5&aqi=no&alerts=no`;
    axios.get(daysWeather)
      .then(function ({ data }) {
        setArrayDay(data);
console.log(arrayDay);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log(arrayDay);

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">

          {/* {arrayDay.forecast ?
             <WeatherCard degres={arrayDay.forecast.forecastday[0].day.avgtemp_c} />
             :
             <WeatherCard degres=""/>
          } */}

        </div>
      </div>
    </div>
  );
}

export default App;
