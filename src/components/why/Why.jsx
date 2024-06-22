import React from 'react'
import './why.scss'
import whyImg1 from '../../assets/svg/why1.svg'
import whyImg2 from '../../assets/svg/why2.svg'
import whyImg3 from '../../assets/svg/why3.svg'
import whyImg4 from '../../assets/svg/why4.svg'

const Why = () => {
  return (
    <div className='why'>
      <div className="container">
      <h2>Why HelloFresh?</h2>
        <div className="why__hug">
          <div className="whyCard">
            <img src={whyImg1} alt="" />
            <br />
            <br />
            <h3>No skimpin’ on the chicken!</h3>
            <span>Or steak, or fish, or plant protein.</span>
          </div>
          <div className="whyCard">
            <img src={whyImg2} alt="" />
            <br />
            <br />
            <h3>No commitment whatsoever</h3>
            <span>Skipping weeks or cancelling is super easy.</span>
          </div>
          <div className="whyCard">
            <img src={whyImg3} alt="" />
            <br />
            <br />
            <h3>The most 5-star reviews</h3>
            <span>Our huge recipe selection wows week after week.</span>
          </div>
          <div className="whyCard">
            <img src={whyImg4} alt="" />
            <br />
            <br />
            <h3>Fresh and affordable</h3>
            <span>Chef-created deliciousness from $7.49 per meal.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why