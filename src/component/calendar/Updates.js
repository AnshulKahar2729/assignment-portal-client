import React from 'react'

function Updates({ selectedDate }) {
  return (
    <div className="selected-date">
        <h3>Deadlines Date</h3>
        <p>{selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
  </div>
  )
}

export default Updates