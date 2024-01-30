import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Hourly = (props) => {
    const data = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                        temp: (d.temp - 273.15).toFixed(2)}))
    const values = props.hourly.map(d => (d.temp - 273.15).toFixed(2))
    const max = Math.max(...values)
    const min = Math.min(...values)
    return <div className='data'>
        <h4 style={{paddingLeft:'1em',textAlign:'left'}}>hourly forecast</h4>
        <div style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
                    {props.hourly.map((d,i) => <div key={i} className="td CellWithDetails" style={{padding:'.5em'}}>
                    <img width='40' src={`https://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt='icon' />
                    <br/>
                    <span style={{fontSize:'.8em'}}>{(d.temp - 273.15).toFixed(2)}&deg;C</span><br/>
                    {new Date(d.dt*1000).toString().split(" ")[4].split(":")[0]}
                    <div className='CellDetails'>
                        <span style={{whiteSpace:'nowrap'}}>{d.weather[0].description}</span><br/>
                        <table style={{lineHeight:'1em', margin:'1em'}}>
                        <tbody>
                        <tr><td style={{whiteSpace:'nowrap',textAlign:'right'}}>feels like</td><td style={{paddingLeft:'1em',textAlign:'left'}}>{(d.feels_like - 273.15).toFixed(2)}&deg;C</td></tr>
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
        <div style={{background:'#789bbd', paddingTop:'1.5em', border:'6px rgb(35, 33, 43) solid'}}>
        <ResponsiveContainer width="98%" height={200}>
            <LineChart data={data}>
                <CartesianGrid stroke="#434c55" />
                <XAxis tick={{ fill: 'black' }} dataKey="h" />
                <Tooltip/>
                <YAxis tick={{ fill: 'black' }} domain={[min,max]}/>
                <Line strokeWidth={2} type="monotone" dataKey="temp" stroke="black" dot={true} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
}

export default Hourly
