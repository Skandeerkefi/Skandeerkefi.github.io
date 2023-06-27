import React from "react";

const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://www.instagram.com/skanderkefii/'
				className='home__social-icon'
				target='_blank'
			>
				<i className='uil uil-instagram'></i>
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
	);
};

export default Social;
