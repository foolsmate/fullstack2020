import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import pService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    pService.getAll().then(start => setPersons(persons.concat(start)))
  }, [])

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setFilter={setFilter} />
      <h3>add new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} persons={persons} />
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons} />
    </div>
  )

}

export default App
