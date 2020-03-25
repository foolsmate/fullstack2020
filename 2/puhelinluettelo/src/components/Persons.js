import React, { useState } from 'react'

const Persons = ({ persons, newFilter }) => {
    return (
        <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.phone}</li>)}</ul>
    )

}

export default Persons
