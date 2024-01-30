const Daily = (props) => 
<div className='data' style={{display:'inline-block',marginLeft:'1em'}}>
     <h4 style={{paddingLeft:'1em',textAlign:'left'}}>daily forecast</h4>
    <table style={{margin:'auto'}}>
        <tbody>
            <tr>
                {props.hourly.map((d,i) => <td key={i} className='td CellWithDetails' style={{padding:'.5em'}}>
                <img width='80' src={`https://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt='icon' />
                <br/>
                <span style={{fontSize:'1em'}}>{(d.temp.day - 273.15).toFixed(2)}&deg;C</span><br/>
                {new Date(d.dt*1000).toString().split(" ")[2]}.
                <div className='CellDetails'>
                    <span style={{fontWeight:'750',whiteSpace:'nowrap'}}>{d.weather[0].description}</span><br/>
                    {d.summary}
                    <ul style={{listStyleType:'none',textAlign:'left'}}>
                        <li><span style={{whiteSpace:'nowrap'}}>feels like {(d.feels_like.day - 273.15).toFixed(2)}&deg;C</span></li>
                        <li><span style={{whiteSpace:'nowrap'}}>dew point {(d.dew_point - 273.15).toFixed(2)}&deg;C</span></li>
                        <li><span style={{whiteSpace:'nowrap'}}>humidity {d.humidity}%</span></li>
                        <li><span style={{whiteSpace:'nowrap'}}>pressure {d.pressure}kPa</span></li>
                        <li><span style={{whiteSpace:'nowrap'}}>wind speed {d.wind_speed}m/s</span></li>
                    </ul>
                </div>
                </td>)}
            </tr>
        </tbody>
    </table>
</div>


export default Daily