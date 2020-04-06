import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setCountries(countries.concat(response.data))
        })
}, [])

  return (
    <>
    <Filter newFilter={newFilter} setFilter={setFilter}></Filter>
    <Countries newFilter={newFilter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
    </>
  )
}

export default App;
