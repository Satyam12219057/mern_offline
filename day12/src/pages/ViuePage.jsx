
import React from 'react'
import { Link } from 'react-router'

const ViuePage = () => {
  return (
    <div>
      <h1>viewPage</h1>
      <a href="/view">view PAGE</a>
      <Link to={'/search'}>search Page </Link>
    </div>
  )
}

export default ViuePage