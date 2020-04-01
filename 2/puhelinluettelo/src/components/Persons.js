import React from 'react'
import Person from './Person'
import pService from '../services/persons'

const Persons = ({ persons, newFilter, setPersons }) => {

    const delPerson = person => {
        if (window.confirm(`Delete '${person.name}' ?`)) {
            pService.del(person.id)
            .catch(error => { 
                alert(`the person '${person.name}' was already deleted from server`) 
                setPersons(persons.filter(n => n.id !== person.id)) })
            setPersons(persons.filter(n => n.id !== person.id))             
        }
    }

    return (
        console.log(persons),
        <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <Person key={person.id} person={person} delPerson={() => delPerson(person)} />)}</ul>
    )

}

export default Persons