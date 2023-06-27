import React from "react";
import "./qualification.css";

const qualification = () => {
	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey </span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div className='qualification__button qualification__active button--flex'>
						<i className='uil uil-graduation-cap  qualification__icon'></i>
						Education
					</div>

					<div className='qualification__button button--flex'>
						<i className='uil uil-briefcase-alt qualification__icon'></i>
						Experience
					</div>
				</div>
				<div className='qualification__sections'>
					<div className='qualification__content'>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Baccalaureate</h3>
								<span className='qualification__subtitle'>
									Carthage Presidence
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2020/2021
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Frontend Web Developer</h3>
								<span className='qualification__subtitle'>PloxHost</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>Jun 2020 - Jul 2020
								</div>
							</div>
							
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Computer Science Student
								</h3>
								<span className='qualification__subtitle'>ISI Kef</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2021 - Present
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>Graphic Designer</h3>
								<span className='qualification__subtitle'>Click and Tick</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2023 - Present
								</div>
							</div>
							
						</div>
					</div>
					<div className='qualification__content'></div>
				</div>
			</div>
		</section>
	);
};

export default qualification;
