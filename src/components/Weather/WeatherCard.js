import React from 'react'
import './Weather.css'
import Icon from './Icon'

function WeatherCard({ data }) {
  return (
    <div>
      <div className="card" style={{ width: "17rem" }}>
        <Icon title={data.getCityByName.weather.summary.title} /> {/*we have sent weather with props for weather visuals*/}
        <div className="card-body">
          <h5 className="card-title"> {
            data.getCityByName.weather.summary.title
          }</h5>
          <p className="card-text">{data.getCityByName.weather.summary.description}
          <br/>
          min : {data.getCityByName.weather.temperature.min} <br/>
          max : {data.getCityByName.weather.temperature.max}
           </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
