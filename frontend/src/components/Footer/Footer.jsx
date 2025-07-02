import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>lorem iposium is dummy text for the printing and tuypesettign idustry lorem ipsum has been the industur's standark dummy text since the 1500's when an ubnkown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+123-456-890</li>
            <li>contact@something.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright stuff 2025 lalalalala</p>
    </div>
  )
}

export default Footer
