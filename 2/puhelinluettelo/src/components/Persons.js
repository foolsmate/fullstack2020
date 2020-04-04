import React from 'react'
import Person from './Person'
import pService from '../services/persons'


const Persons = ({ persons, newFilter, setPersons, setNotification, setErr }) => {

    const delPerson = person => {
        if (window.confirm(`Delete '${person.name}' ?`)) {
            pService.del(person.id)
                .catch(error => {
                    setPersons(persons.filter(n => n.id !== person.id))
                    setErr(true)
                    setNotification(`Information of ${person.name} was already deleted from server`)        
                    setTimeout(() => { setNotification(null) }, 5000)
                })
            setErr(false)
            setPersons(persons.filter(n => n.id !== person.id))
            setNotification(`Removed '${person.name}'`)
            setTimeout(() => { setNotification(null) }, 5000)
        }
    }

    return (
        console.log(persons),
        <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <Person key={person.id} person={person} delPerson={() => delPerson(person)} />)}</ul>
    )

}

export default Persons