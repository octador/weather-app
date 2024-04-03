import './App.css';
import Header from '../header/Header'
import WeatherCard from '../weatherCard/WeatherCard';


function App() {

  

  return <div className="App">
      <Header/>
      <div className="row">
        <div className="col s12 m6 push-m3">
          <WeatherCard/>
        </div>
      </div>
      </div>
}

export default App;
