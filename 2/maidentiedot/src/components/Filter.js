import React from 'react'

const Filter = ({ newFilter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    return (
        <div>find countries <input value={newFilter} onChange={handleFilterChange} /></div>
    )

}

export default Filter
