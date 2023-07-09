import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      you are not admin , you cannot access this page

      <Link to="/" >Go Back</Link>
    </div>
  )
}

export default NotFound
