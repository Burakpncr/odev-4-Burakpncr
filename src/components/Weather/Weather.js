import { useState } from 'react'
import {
  useQuery
} from "@apollo/client";
import { WEATHER_QUERY } from '../Queries'
import CityList from '../CityList'
import WeatherCard from './WeatherCard'

function Weather() {
  const [city, setCity] = useState('izmir') 
  const { loading, error, data } = useQuery(WEATHER_QUERY, { variables: { city: city } }); //We received the data from Graphql via apollo and sent the data that the user would enter.
  if (loading) {
    return <div> Loading ... </div>
  }
  if (error) {
    return <div> Error : {error} </div>
  }
  return (
    <div>
      <CityList defaultCity={city} setDefaultCity={setCity} />
      <WeatherCard data={data} />
    </div>
  )
}

export default Weather
