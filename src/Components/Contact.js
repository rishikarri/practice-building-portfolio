import React, { Component } from 'react';


class Contact extends Component{


	render(){
		return(
			<div>
				<div>
					
					<div className='quote-text'>
						I like building things and meeting new people! 
					</div>

					<div className='quote-text'>
						Learn more / Say Hi:
					</div>					

					<div className='col-xs-6 col-xs-offset-3 contact-me-section margin-above'>



						<div className='give-me-some-space margin-above'>
							<ul className='no-bullet'>
								<li>
									<i className="fa fa-envelope fa-5x" aria-hidden="true"></i>								
								</li>
								<li>
									Email
								</li>
							</ul>						
						</div>

						<div className='give-me-some-space'>
							<ul className='no-bullet'>
								<li>
									<a href='https://github.com/rishikarri'><i className="fa fa-github-square fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Github
								</li>
							</ul>						
						</div>						

						<div className='give-me-some-space'>
							<ul className='no-bullet'>
								<li>
									<i className="fa fa-file-pdf-o fa-5x" aria-hidden="true"></i>
								</li>
								<li>
									Resume
								</li>
							</ul>						
						</div>						


						<div className='give-me-some-space'>
							<ul className='no-bullet'>
								<li>
									<a href='https://www.linkedin.com/in/rishi-karri-35898465'> <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									LinkedIn
								</li>
							</ul>						
						</div>																		

					

					</div>
					
				</div>

			</div>
		)
	}
}

export default Contact;

