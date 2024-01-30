import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Hourly = (props) => {
    const data = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                        temp: (d.temp - 273.15).toFixed(2)}))
    const values = props.hourly.map(d => (d.temp - 273.15).toFixed(2))
    const max = Math.max(...values)
    const min = Math.min(...values)
    return <div className='data'>
        <h4 style={{paddingLeft:'1em',textAlign:'left'}}>hourly forecast</h4>
        <table style={{margin:'auto'}}>
            <tbody>
                <tr>
                    {props.hourly.map((d,i) => <td key={i} className="td CellWithDetails" style={{padding:'.5em'}}>
                    <img width='40' src={`https://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt='icon' />
                    <br/>
                    <span style={{fontSize:'.8em'}}>{(d.temp - 273.15).toFixed(2)}&deg;C</span><br/>
                    {new Date(d.dt*1000).toString().split(" ")[4].split(":")[0]}
                    <div className='CellDetails'>
                        <span style={{whiteSpace:'nowrap'}}>{d.weather[0].description}</span><br/>
                        <ul style={{listStyleType:'none',textAlign:'left'}}>
                            <li><span style={{whiteSpace:'nowrap'}}>feels like {(d.feels_like - 273.15).toFixed(2)}&deg;C</span></li>
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
        <div style={{background:'#789bbd', paddingTop:'1.5em', border:'6px rgb(35, 33, 43) solid'}}>
        <LineChart width={1100} height={200} data={data}>
            <CartesianGrid stroke="#434c55" />
            <XAxis tick={{ fill: 'black' }} dataKey="h" />
            <Tooltip/>
            <YAxis tick={{ fill: 'black' }} domain={[min,max]}/>
            <Line strokeWidth={2} type="monotone" dataKey="temp" stroke="black" dot={true} />
        </LineChart>
        </div>
    </div>
}

export default Hourly