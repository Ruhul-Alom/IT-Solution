import React from 'react'
import './Footer.css'
import logo  from '../../../images/logo.png'

const Footer = () => {
    return (
       
<footer className="footer-section mt-5">

			<div className="footer-left">

				<h3><span><img src={logo} width="50px" alt=""/></span>Solution</h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Service</a>
				
					<a href="#">Review</a>
				
					<a href="#">Recent Project</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">IT Solution © 2021</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span> Hero</span>Sylhet , Bangladesh</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>0880123456789</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="#">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

			

			</div>

		</footer>
    )
}

export default Footer
