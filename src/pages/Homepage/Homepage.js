import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useData } from '../../Context/Context'
import './Homepage.css'
import { categories } from '../../backend/db/categories'
import masterClass1 from '../../assets/images/8.jpg'
import masterClass2 from '../../assets/images/9.jpg'

const Homepage = () => {
  const { categories, videos } = useData()

  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <p className='hero-text-primary'>Glowing divas is leading digital community for all beauty,fashion ,makeup fanatics out there!</p>
          <Link className='btn btn-outline-primary hero-cta-btn links' to="/videolisting"  >Explore</Link>
        </div>
      </div>
      <div className='categories-section flex-vt'>
        {state.categories.map(category => {
          if(category.categoryName==="Makeup"  ){
           return(
            <div className='category flex-hz jc-sa'>
            <img className='category-img' src={category.img} alt="category-img" />
            <div>
              <p className='category-text text-md w-30'>{category.description}</p>
              {/* <button class="btn btn-outline-info category-btn">Explore more</button> */}
            </div>
          </div>
           )
          }else if(category.categoryName==="Fashion" ){
            return(
              <div className='category flex-hz jc-sa'>
              
              <div>
                <p className='category-text text-md w-30'>{category.description}</p>
                {/* <button class="btn btn-outline-info category-btn">Explore more</button> */}
              </div>
              <img className='category-img' src={category.img} alt="category-img" />
            </div>
            )
          }
         
        })}
      </div>
      <div className='special-category-container flex-vt'>
          <p>Trending right now!</p>
          <div className='flex-hz'>
            <img className='masterclass-img' src={masterClass1}/>
            <img  className='masterclass-img' src={masterClass2}/>
          </div>
      </div>
      <div className='categories-section flex-vt'>
        {state.categories.map(category => {
          if(category.categoryName==="Haircare" ){
          
           return(
            <div className='category flex-hz jc-sa'>
            <img className='category-img' src={category.img} alt="category-img" />
            <div>
              <p className='category-text text-md w-30'>{category.description}</p>
              {/* <button class="btn btn-outline-info category-btn">Explore more</button> */}
            </div>
           
          </div>
           )
          }else if(category.categoryName==="Skincare" ){
            return(
              <div className='category flex-hz jc-sa'>
             
              <div>
                <p className='category-text text-md w-30'>{category.description}</p>
                {/* <button class="btn btn-outline-info category-btn">Explore more</button> */}
              </div>
              <img className='category-img' src={category.img} alt="category-img" />
            </div>)
          }
        })}
      </div>
    </>
  )
}
export { Homepage }