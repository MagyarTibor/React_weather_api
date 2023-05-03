
import './App.css';
import Search from './component/search/search';
 import CurreWeather from './component/current-weather/current-weather';
 import {WEATHER_API_URL, WEATHER_API_KEY} from './api'
import { useState } from 'react';
//import Forcast from './component/forcast/forcast';




function App() {

  const [currentWeather, setCurrentweather] = useState(null)
  const [forcast, setForcast] = useState(null)

const handleOnSearchChange = (searchData) =>{
  const [lat, lon] = searchData.value.split(" ")

  const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  
Promise.all([currentWeatherFetch, forecastFetch])
 .then(async(response) => {
   const weatherResponse = await response[0].json()
   const forcastResponse = await response[1].json()



   setCurrentweather({ city: searchData.label, ...weatherResponse})
   setForcast({ city: searchData.label, ...forcastResponse})

   
  })
  
   .catch((err) => console.log(err))
   
}
console.log(forcast);
  return (
    <div className="container">
      <Search onSearcChange={handleOnSearchChange}/>
      { currentWeather && <CurreWeather data={currentWeather}/>}
      {/*forcast && <Forcast data={forcast}/>*/}
      

    </div>
  );
}

export default App;
