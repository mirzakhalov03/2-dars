import React from 'react'
import './questions.scss'
import downSign from '../../assets/svg/downSign.svg'

const Questions = () => {
  return (
    <div className='questions'>
      <div className="container">
        <h2>More Questions?</h2>
        <div className="questions__hug">
          <div className='sign'><img src={downSign} alt="" /><span>How does HelloFresh’s meal kit delivery service work?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>Which food meal plans & recipes does HelloFresh offer?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>How many times a week does HelloFresh deliver?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>Does HelloFresh give nutrition & calorie information?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>How do I recycle my HelloFresh box?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>Why should I choose HelloFresh as my meal kit service?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>How much does HelloFresh cost?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>Does HelloFresh support a healthy lifestyle?</span></div>
          <div className="sign"><img src={downSign} alt="" /><span>Can I skip a week of delivery?</span></div>
        </div>
      </div>
    </div>
  )
}

export default Questions