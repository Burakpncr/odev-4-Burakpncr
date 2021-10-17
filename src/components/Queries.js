import {
  gql,
} from "@apollo/client";

//the necessary queries were written for the data

export const WEATHER_QUERY = gql`
query getCityByName($city : String!){
  getCityByName(name: $city){
    name
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        min
        max
      }
    }
  }
}
`