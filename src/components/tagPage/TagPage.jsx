import React from 'react'
import './tagpage.scss'
import tagImg1 from '../../assets/images/tag1.png'
import tagImg2 from '../../assets/images/tag2.png'
import tagImg3 from '../../assets/images/tag3.png'
import tagImg4 from '../../assets/images/tag4.png'

const TagPage = () => {
  return (
    <div className='tagPage'>
      <div className="container">
        <h2 className='tagPage__title'>Cook it. Love it. Tag it #HelloFreshPics</h2>
        <p>Follow us on Instagram @hellofresh</p>
        <div className="tagPage__hug">
          <div className="tagCard">
            <img src={tagImg1} alt="" />
            <h3>bdanielle1285</h3>
            <p>My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!</p>
          </div>
          <div className="tagCard">
            <img src={tagImg2} alt="" />
            <h3>lilpepthekelpie</h3>
            <p>I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
          </div>
          <div className="tagCard">
            <img src={tagImg3} alt="" />
            <h3>mandi14eid</h3>
            <p>Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!</p>
          </div>
          <div className="tagCard">
            <img src={tagImg4} alt="" />
            <h3>our_lovely_stride</h3>
            <p>We had a cooking class yesterday and we had such an amazing time. 😁 They had such a great time working as a team and I can’t wait for our weekly cooking class 🙌🏻😁</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagPage