import React from 'react'

const Filter = ({ newFilter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    return (
        <div>filter shown with <input value={newFilter} onChange={handleFilterChange} /></div>
    )

}

export default Filter
