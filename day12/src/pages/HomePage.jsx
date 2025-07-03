
import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <a href="/search"> SearchPage</a>
      <a href="/view">View Page</a>
      <Link to="/view">_viue_page_link</Link>

    </div>
    
  )
}

export default HomePage