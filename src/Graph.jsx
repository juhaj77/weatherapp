import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Tabs = ({onClick,show}) => {
    switch(show) {
      case 'temperature': return (
        <div className="tabs">
          <div className="active">temperature</div>
          <div className="passive" onClick={() => onClick('humidity')}>humidity</div>
          <div className="passive" onClick={() => onClick('pressure')}>pressure</div>
          <div className="passive" onClick={() => onClick('wind')}>wind</div>
        </div>)
     case 'humidity': 
      return (
        <div className="tabs">
          <div className="passive" onClick={() => onClick('temperature')}>temperature</div>
          <div className="active">humidity</div>
          <div className="passive" onClick={() => onClick('pressure')}>pressure</div>
          <div className="passive" onClick={() => onClick('wind')}>wind</div>
        </div>)
    case 'pressure': 
      return (
        <div className="tabs">
          <div className="passive" onClick={() => onClick('temperature')}>temperature</div>
          <div className="passive" onClick={() => onClick('humidity')}>humidity</div>
          <div className="active">pressure</div>
          <div className="passive" onClick={() => onClick('wind')}>wind</div>
        </div>)
       case 'wind': 
       return (
         <div className="tabs">
           <div className="passive" onClick={() => onClick('temperature')}>temperature</div>
           <div className="passive" onClick={() => onClick('humidity')}>humidity</div>
           <div className="passive" onClick={() => onClick('pressure')}>pressure</div>
           <div className="active">wind</div>
         </div>)
    }
  }

const Graph = (props) => {
    const [show, setShow] = useState('temperature')
    const temp = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                        temp: (d.temp - 273.15).toFixed(2)}))
    const tempValues = props.hourly.map(d => (d.temp - 273.15).toFixed(2))
    const tempMax = Math.max(...tempValues)
    const tempMin = Math.min(...tempValues)

    const humidity = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                            humidity: d.humidity.toFixed(2)}))
    const humidityValues = props.hourly.map(d => d.humidity.toFixed(2))
    const humidityMax = Math.max(...humidityValues)
    const humidityMin = Math.min(...humidityValues)

    const pressure = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                            pressure: d.pressure.toFixed(2)}))
    const pressureValues = props.hourly.map(d => d.pressure.toFixed(2))
    const pressureMax = Math.max(...pressureValues)
    const pressureMin = Math.min(...pressureValues)

    const wind = props.hourly.map(d => ({h: new Date(d.dt*1000).toString().split(" ")[4].split(":")[0],
                                        wind: d.wind_speed.toFixed(2)}))
    const windValues = props.hourly.map(d => d.wind_speed.toFixed(2))
    const windMax = Math.max(...windValues)
    const windMin = Math.min(...windValues)

    switch(show) {
    case 'temperature':
        return (
            <>  
            <Tabs onClick={setShow} show={show}/>
            <div style={{background:'#789bbd', paddingTop:'1.5em'}}>
            <ResponsiveContainer width="98%" height={200}>
                <LineChart data={temp}>
                    <CartesianGrid stroke="#434c55" />
                    <XAxis tick={{ fill: 'black' }} dataKey="h" />
                    <Tooltip/>
                    <YAxis tick={{ fill: 'black' }} domain={[tempMin,tempMax]}/>
                    <Line strokeWidth={2} type="monotone" dataKey="temp" stroke="black" dot={true} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </>
        )
    case 'humidity':
        return (
            <>  
            <Tabs onClick={setShow} show={show}/>
            <div style={{background:'#789bbd', paddingTop:'1.5em'}}>
            <ResponsiveContainer width="98%" height={200}>
                <LineChart data={humidity}>
                    <CartesianGrid stroke="#434c55" />
                    <XAxis tick={{ fill: 'black' }} dataKey="h" />
                    <Tooltip/>
                    <YAxis tick={{ fill: 'black' }} domain={[humidityMin,humidityMax]}/>
                    <Line strokeWidth={2} type="monotone" dataKey="humidity" stroke="black" dot={true} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </>
        )
    case 'pressure':
        return (
            <>  
            <Tabs onClick={setShow} show={show}/>
            <div style={{background:'#789bbd', paddingTop:'1.5em'}}>
            <ResponsiveContainer width="98%" height={200}>
                <LineChart data={pressure}>
                    <CartesianGrid stroke="#434c55" />
                    <XAxis tick={{ fill: 'black' }} dataKey="h" />
                    <Tooltip/>
                    <YAxis tick={{ fill: 'black' }} domain={[pressureMin,pressureMax]}/>
                    <Line strokeWidth={2} type="monotone" dataKey="pressure" stroke="black" dot={true} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </>
        )
    case 'wind':
        return (
            <>  
            <Tabs onClick={setShow} show={show}/>
            <div style={{background:'#789bbd', paddingTop:'1.5em'}}>
            <ResponsiveContainer width="98%" height={200}>
                <LineChart data={wind}>
                    <CartesianGrid stroke="#434c55" />
                    <XAxis tick={{ fill: 'black' }} dataKey="h" />
                    <Tooltip/>
                    <YAxis tick={{ fill: 'black' }} domain={[windMin,windMax]}/>
                    <Line strokeWidth={2} type="monotone" dataKey="wind" stroke="black" dot={true} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </>
        )
        }
}

export default Graph