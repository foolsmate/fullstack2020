import React, { useState } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setFilter] = useState('')


  return (
    <>
    <Filter newFilter={newFilter} setFilter={setFilter}></Filter>
    <Countries newFilter={newFilter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
    </>
  )
}

export default App;
