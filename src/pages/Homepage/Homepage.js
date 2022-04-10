import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context/Context'
import './Homepage.css'

const Homepage = () => {
  const { state } = useContext(StateContext)
  
  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <p className='hero-text-primary'>Explore more about makeup,skincare,haircare and menstrual health</p>
          <Link className='btn btn-outline-primary hero-cta-btn links' to="/videolisting"  >Explore</Link>
        </div>
      </div>
      <div className='categories-section flex-vt'>
        {state.categories.map(category => {
          return (
            <div className='category flex-hz jc-sa'>
              <img className='category-img' src={category.img} alt="category-img" />
              <div>
                <p className='category-text text-md w-30'>{category.description}</p>
                <button class="btn btn-outline-info category-btn">Explore more</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export { Homepage }