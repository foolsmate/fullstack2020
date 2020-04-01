import React from 'react'

const Person = ({person, delPerson }) => {

    return (
        <li>{person.name} {person.phone} <button key={person.id} onClick={delPerson}>delete</button></li>
    )

}

export default Person