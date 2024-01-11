import React from 'react'
import { Link } from 'react-router-dom'

function TeacherSettings() {
  return (
    <div>
      <button className='mt-4 text-white bg-red-600 hover:bg-red-700'><Link to='/'>Logout</Link></button>
    </div>
  )
}

export default TeacherSettings