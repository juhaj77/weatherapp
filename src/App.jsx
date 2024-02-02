import { useState, useEffect } from 'react'
import Hourly from './Hourly'
import Daily from './Daily'
import Current from './Current'
import Graph from './Graph'
import './App.css'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [geo, setGeo] = useState(null)

  const fetchData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setWeather(data)
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(data => {
      setGeo(data)
      })
    })
    .catch(e => console.log(e))
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(p => fetchData(p.coords.latitude,p.coords.longitude))
  }, [])

  useEffect(() => {
    console.log(weather) 
  }, [weather])

  useEffect(() => {
    console.log(geo) 
  }, [geo])

  const lenghtOfTheDay = (weather) => {
    const lengthArray = ((weather.current.sunset - weather.current.sunrise)/3600).toString().split('.')
    return lengthArray[0] + ' hours ' + (Number('0.'+lengthArray[1])*60).toFixed(0) + ' minutes'
  }
  return weather && geo &&
    <>
      <h1 style={{textShadow:'-3px 3px 0 #789bbd,3px 3px 0 #789bbd,3px -3px 0 #789bbd,-3px -3px 0 #789bbd'}}>weather</h1>
      hover over the icon for more information
      <div className='data' style={{textAlign:'left', padding:'1em 0 1em 1em'}}>
      sunrise {new Date(weather.current.sunrise*1000).toString().split(' ')[4]}&#160;&#160;-&#160;&#160;
      sunset {new Date(weather.current.sunset*1000).toString().split(' ')[4]}&#160;&#160;-&#160;&#160;
      length of the day is {lenghtOfTheDay(weather)}&#160;&#160;-&#160;&#160;
      moonrise {new Date(weather.daily[0].moonrise*1000).toString().split(' ')[4]}&#160;&#160;-&#160;&#160;
      moonset {new Date(weather.daily[0].moonset*1000).toString().split(' ')[4]}
      </div>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <Current weather={weather} geo={geo}/>
        <Daily hourly={weather.daily}/>
      </div>
      <Hourly hourly={weather.hourly.slice(0,18)}/>
      <Graph hourly={weather.hourly.slice(0,18)} />
    </>
  
}

export default App
