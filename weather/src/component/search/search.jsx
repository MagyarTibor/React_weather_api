import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({onSearcChange}) => {

const [search, setSearch]= useState(null)

const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
    geoApiOptions)
    .then(response => response.json())
    .then(response => {
        return {
          options: response.data.map((city) => {
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`
            }
          } )
        }
    })
    .catch(err => console.error(err));

}

const handleOnchange = (searchData) => {
    setSearch(searchData)
    onSearcChange(searchData)

}

  return (
    < AsyncPaginate 
    placeholder="Searc for city"
    debounceTimeout={600}
    value={search}
    onChange={handleOnchange}
    loadOptions={loadOptions}
    />
  )
}

export default Search