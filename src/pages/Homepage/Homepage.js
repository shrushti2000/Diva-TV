import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../Context/Context'
import './Homepage.css'
import masterClass1 from '../../assets/images/8.jpg'
import masterClass2 from '../../assets/images/9.jpg'
import businesswomen1 from '../../assets/images/businesswomen1.jpg'
import businesswomen2 from '../../assets/images/businesswomen2.jpg'
import businesswomen3 from '../../assets/images/businesswomen3.jpg'

const Homepage = () => {
  const { categories } = useData()

  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <p className='hero-text-primary'>Glowing divas is leading digital community for all beauty,fashion ,makeup fanatics out there!</p>
          <p className='hero-text-secondary'>Get styling tips from your favourite celebs!</p>
          <Link className='btn btn-outline-primary hero-cta-btn links' to="/videos"  >Explore</Link>
        </div>
      </div>
      <div className='categories-section flex-vt'>
        {categories.map(category => {
          if (category.categoryName === "Makeup") {
            return (
              <div className='category flex-hz jc-sa'>
                <img className='category-img' src={category.img} alt="category-img" />
                <div>
                  <p className='category-text text-md w-30'>{category.description}</p>
                  <button class="btn btn-secondary-info category-btn">Explore more</button>
                </div>
              </div>
            )
          } else if (category.categoryName === "Fashion") {
            return (
              <div className='category flex-hz jc-sa'>

                <div>
                  <p className='category-text text-md w-30'>{category.description}</p>
                  <button class="btn btn-secondary-info category-btn">Explore more</button>
                </div>
                <img className='category-img' src={category.img} alt="category-img" />
              </div>
            )
          }

        })}
      </div>
      <div className='special-category-container flex-vt'>
        <p className='category-title'>Trending makeup masterclasses right now!</p>
        <div className='flex-hz'>
          <img className='masterclass-img' src={masterClass1} />
          <img className='masterclass-img' src={masterClass2} />
        </div>
      </div>
      <div className='categories-section flex-vt'>
        {categories.map(category => {
          if (category.categoryName === "Haircare") {

            return (
              <div className='category flex-hz jc-sa'>
                <img className='category-img' src={category.img} alt="category-img" />
                <div>
                  <p className='category-text text-md w-30'>{category.description}</p>
                  <button class="btn btn-secondary-info category-btn">Explore more</button>
                </div>

              </div>
            )
          } else if (category.categoryName === "Skincare") {
            return (
              <div className='category flex-hz jc-sa'>

                <div>
                  <p className='category-text text-md w-30'>{category.description}</p>
                  <button class="btn btn-secondary-info category-btn">Explore more</button>
                </div>
                <img className='category-img' src={category.img} alt="category-img" />
              </div>)
          }
        })}
      </div>
      <div className='special-category-container flex-vt'>
        <p className='category-title'>Know more about women who have set great empire in makeup and fashion industries!</p>
        <div className='flex-hz'>
          <img className='masterclass-img' src={businesswomen1} />
          <img className='masterclass-img' src={businesswomen2} />
          <img className='masterclass-img' src={businesswomen3} />
        </div>
      </div>
    </>
  )
}
export { Homepage }