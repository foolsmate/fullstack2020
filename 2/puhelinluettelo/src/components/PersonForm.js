import React from 'react'

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
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
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
