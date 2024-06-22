import React from 'react'
import './footer.scss'
import facebook from '../../assets/svg/facebook.svg'
import twitter from '../../assets/svg/twitter.svg'
import instagram from '../../assets/svg/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__hug">
          <div className="tab">
            <ul>
              <p>HelloFresh</p>
              <li>Students</li>
              <li>Blog</li>
              <li>Recipes</li>
              <li>Hero Discounts</li>
              <li>California Supply Chains Act</li>
              <li>Hero Discounts</li>
              <li>Do Not Sell My Person</li>

            </ul>
            <ul>
              <p>Our company</p>
              <li>HelloFresh Group</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Press Discounts</li>
            </ul>
            <ul>
              <p>Work with us</p>
              <li>Students</li>
              <li>Blog</li>
              <li>Recipes</li>
            </ul>
            <ul>
              <p>Contact us</p>
              <li>Help Center & FAQ</li>
              <li>Partnership Inquiries</li>
              <li>Corporate Sales</li>
              <li>Do Not Sell My Personal Information</li>
            </ul>
            <ul>
              <p>Download our app</p>
              <li>Manage your deliveries from anywhere, anytime.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer__end">
          <p>© HelloFresh 2022</p>
          <div className='terms'>
              <ul>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Accessibility</li>
              </ul>
          </div>
          <div className="social">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer