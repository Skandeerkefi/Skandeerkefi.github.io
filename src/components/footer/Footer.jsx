import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Skander</h1>
				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>
					<li>
						<a href='testimonials' className='footer__link'>
							Testimonials
						</a>
					</li>
				</ul>
				<div className='footer__social'>
					<a
						href='https://www.instagram.com/skanderkefii/'
						className='home__social-icon'
						target='_blank'
					>
						<i className='bx bxl-instagram'></i>
					</a>
					<a
						href='https://www.facebook.com/skander.kefi.37/'
						className='home__social-icon'
						target='_blank'
					>
						<i className='home__social-icon' target='_blank'>
							<i className='uil uil-facebook-f'></i>
						</i>
					</a>
					<a
						href='https://www.linkedin.com/in/skander-kefi-2478ba222/'
						className='home__social-icon'
						target='_blank'
					>
						<i className='home__social-icon' target='_blank'>
							<i className='uil uil-linkedin'></i>
						</i>
					</a>
				</div>
				<span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
