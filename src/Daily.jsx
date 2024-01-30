const Daily = (props) => 
<div className='data' style={{display:'inline-block'}}>
     <h4 style={{paddingLeft:'1em',textAlign:'left'}}>daily forecast</h4>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                {props.hourly.map((d,i) => <div key={i} className='td CellWithDetails' style={{padding:'.5em'}}>
                <img width='80' src={`https://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt='icon' />
                <br/>
                <span style={{fontSize:'1em'}}>{(d.temp.day - 273.15).toFixed(2)}&deg;C</span><br/>
                {new Date(d.dt*1000).toString().split(" ")[2]}.
                <div className='CellDetails'>
                    <span style={{fontWeight:'750',whiteSpace:'nowrap'}}>{d.weather[0].description}</span><br/>
                    {d.summary}
                    <table style={{lineHeight:'1em', margin:'1em'}}>
                        <tbody>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>feels like</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(d.feels_like.day - 273.15).toFixed(2)}&deg;C</td></tr>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>dew point</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(d.dew_point - 273.15).toFixed(2)}&deg;C</td></tr>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>humidity</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{d.humidity}%</td></tr>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>pressure</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{d.pressure}kPa</td></tr>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>wind speed</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{d.wind_speed}m/s</td></tr>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>wind gust</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{d.wind_gust}m/s</td></tr>
                        </tbody>
                    </table>
                </div>
                </div>)}
                </div>
</div>


export default Daily