import React from 'react'


const Countries = ({ countries, newFilter, setFilter }) => {

    const filteredList = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

    if (filteredList.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    } else if (filteredList.length === 1) {
        return (
            <div>
                <h1>{filteredList[0].name}</h1>
                <div>capital: {filteredList[0].capital}</div>
                <div>population: {filteredList[0].population}</div>
                <h2>languages</h2>
                <ul>{filteredList[0].languages.map(language => <li>{language.name}</li>)}</ul>
                <img src={filteredList[0].flag} alt='flag' width="200" height="100" />
            </div>
        )
    } else {
        return (
            <ul>{filteredList.map(country => <li key={country.name}>{country.name} <button key={country.name} onClick={() => setFilter(country.name)}>show</button></li>)}</ul>)
    }




}

export default Countries
