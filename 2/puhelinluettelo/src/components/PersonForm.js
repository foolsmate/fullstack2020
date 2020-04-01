import React from 'react'
import pService from '../services/persons'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, setPersons, persons }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()

        const nameObject = {
            name: newName,
            phone: newNumber
        }

        if (persons.filter(o => o.name === newName).length > 0) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const old = persons.find(person => person.name === newName)
                pService.update(old.id, { ...old, phone: newNumber })
                    .then(response =>
                        setPersons(persons.map(person => person.id !== old.id ? person : { ...old, phone: newNumber })))
            }

        } else {
            pService
                .create(nameObject)
                .then(returnedName => {
                    setPersons(persons.concat(returnedName))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    return (
        <form onSubmit={addName}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

}

export default PersonForm
