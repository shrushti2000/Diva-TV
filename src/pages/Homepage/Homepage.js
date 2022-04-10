import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <p className='hero-text-primary'>Explore more about makeup,skincare,haircare and menstrual health</p>
          <Link className='btn btn-outline-primary hero-cta-btn links' to="/videolisting"  >Explore</Link>
        </div>
      </div>
    </>
  )
}

export { Homepage }