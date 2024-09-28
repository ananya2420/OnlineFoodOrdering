import React from 'react'
import './Footer.css'
import { assets } from '../../../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

        </div>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>This website is just for my portfolio.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            
        </div>
        <div className="footer-content-right">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Private policy</li>
            </ul>

        </div>
        <div className="footer-content-center">
            <h2>Get In Touch</h2>
            <ul>
                <li>01700-675348</li>
                <li>support@Gourab.com</li>
            </ul>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Gourab.com - All rights reserved.</p>
      
    </div>
    
  )
}

export default Footer
