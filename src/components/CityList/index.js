import React from 'react'
import './CityList.css'
import { Cities } from '../../Constants/Cities'

function CityList(props) {
  const { defaultCity, setDefaultCity } = props;

  const cityOnChange = (e) => {
    setDefaultCity(e.target.value)
  }
  return (
    <div className="CityList-Container">
      <h5> Hava durumunu öğrenmek istediğiniz şehri seçiniz </h5>
      <select className="form-select" aria-label="Default select example" value={defaultCity} onChange={cityOnChange} >{/*We got the city information entered in the city list from statekvmvm.*/}
        {
          Cities.map(city => {
            return (
              <option value={city.city} key={city.plate}>{city.city}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default CityList
