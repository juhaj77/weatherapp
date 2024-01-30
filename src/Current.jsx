const Current = ({ weather, geo }) => 
<div className='data' style={{display:'inline-block',padding:'0 .15em .1em .15em'}}>
<h4 style={{paddingLeft:'1em',textAlign:'left'}}>{new Date(weather.current.dt*1000).toString().split(" ")[4]} weather in {geo[0].name}</h4>
  <div className='data' style={{marginBottom:'0', paddingTop:'1em'}}>
    {weather.current.weather[0].description}
    <div style={{
      marginBottom:'0',
      padding:'0 1em 0 1em',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'}}>
      <img width='100' src={`https://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt='icon' />
      <table style={{lineHeight:'1em', margin:'1em'}}>
        <tbody>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>temp</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(weather.current.temp - 273.15).toFixed(2)}&deg;C</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>feels like</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(weather.current.feels_like - 273.15).toFixed(2)}&deg;C</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>dew point</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(weather.current.dew_point - 273.15).toFixed(2)}&deg;C</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>humidity</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{weather.current.humidity}%</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>pressure</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{weather.current.pressure}kPa</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>wind speed</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{weather.current.wind_speed}m/s</td></tr>
        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>wind gust</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{weather.daily[0].wind_gust}m/s</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

export default Current
