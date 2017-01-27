import React, { Component } from 'react';


class About extends Component{


	render(){
		return(
			<div className="padding-none">
				<div className="row kill-margin">
					<div className="col-xs-12 quote-text"> 

						<div className='col-xs-3'>
							<div>
								<img className='about-photo' src='../../Images/professional-picture-of-me.jpeg'/>
							</div>
						</div>

						<div className='col-xs-9'>
							My name is Rishi. I love to code and have a passion for finance.
						</div>
					</div>
				</div>

				<div className="row kill-margin">
					<div className="col-xs-5 cursive-font">
					Web Development Experience

					</div>

					<div className="col-xs-2">
					
					</div>

					<div className="col-xs-5 cursive-font">
					Finance Experience
					</div>
				</div>


				<div className="row kill-margin">
					<div className="col-xs-5 light-blue-column">

						<div className='col-xs-12 text-center margin-above'>
							<img className='about-photo' src='../../Images/digitalcrafts-logo-1200-new.png' />
						</div>	
					
					</div>

					<div className="col-xs-2">
					
					</div>

					<div className="col-xs-5 light-green-column">
						
					</div>
				</div>

				
				
			</div>
		)
	}
}

export default About;