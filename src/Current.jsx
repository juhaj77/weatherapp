const Current = ({ weather }) => 
<div className='data' style={{display:'inline-block',padding:'0 .15em .1em .15em'}}>
<h4 style={{paddingLeft:'1em',textAlign:'left'}}>{new Date(weather.current.dt*1000).toString().split(" ")[4]} weather in {weather.timezone.split('/')[1]}</h4>
  <div className='data' style={{marginBottom:'0', paddingTop:'1em'}}>
    {weather.current.weather[0].description}
    <div style={{
      marginBottom:'0',
      padding:'0 1em 0 1em',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'}}>
      <img width='100' src={`https://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt='icon' />
      <ul style={{listStyleType:'none',textAlign:'left'}}>
        <li>temp {(weather.current.temp - 273.15).toFixed(2)}&deg;C</li>
        <li>feels like {(weather.current.feels_like - 273.15).toFixed(2)}&deg;C</li>
        <li>dew point {(weather.current.dew_point - 273.15).toFixed(2)}&deg;C</li>
        <li>humidity {weather.current.humidity}%</li>
        <li>pressure {weather.current.pressure}kPa</li>
        <li><span style={{whiteSpace:'nowrap'}}>wind speed {weather.current.wind_speed}m/s</span></li>
      </ul>
    </div>
  </div>
</div>

export default Current