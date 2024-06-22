import React from 'react'
import './what.scss'
import whatImg1 from '../../assets/images/what.png'

const What = () => {
  return (
    <div className='what'>
      <div className="container">
        <div className="what__hug">
          <img src={whatImg1} alt="" />
          <div className="what__content">
            <h2>What’s inside each box?</h2>
            <ul>
              <li>✓ Easy-to-follow recipes with clear nutritional info</li>
              <li>✓ High-quality ingredients sourced straight from the farm</li>
              <li>✓ Convenient meal kits that fit perfectly in the fridge</li>
              <li>✓ A fun cooking experience that makes you feel unstoppable</li>
              <a href="#"><li>✓ Innovative packaging designed to reduce waste</li></a>
            </ul>
            <button>View Our Plans</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default What