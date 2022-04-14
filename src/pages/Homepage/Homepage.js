import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useData } from '../../Context/Context'
import './Homepage.css'

const Homepage = () => {
  const { categories, videos } = useData()

  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <p className='hero-text-primary'>Explore more about makeup,skincare,haircare and menstrual health</p>
          <Link className='btn btn-outline-primary hero-cta-btn links' to="/videos"  >Explore</Link>
        </div>
      </div>
      <div className='categories-section flex-vt'>
        {categories.map(category => {
          return (
            <div className='category flex-hz jc-sa'>
              <img className='category-img' src={category.img} alt="category-img" />
              <div>
                <p className='category-text text-md w-30'>{category.description}</p>
                <Link className='btn btn-outline-primary hero-cta-btn links' to="/video"  >Explore more</Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export { Homepage }