import React, { Component } from 'react';


class About extends Component{


	render(){
		return(
			<div className="padding-none">
				<div className='col-xs-12'>
					<div className='col-xs-12 col-sm-3 col-md-2 personal-photo-div col-lg-3'>
						<img className='personal-photo' src='../../Images/professional-picture-of-me.jpeg'/>
					</div>

					<div className='col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text'>
						My name is Rishi. I love to code and have a passion for finance. 
					</div>	

					<div className='col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text-smaller margin-above padding-right-zero'>
					Prior to web development, I worked as an investment banking analyst (Technology & Services Group) for <a target="_blank" href='http://www.rwbaird.com/investment-banking/'>Robert W. Baird.</a>
					</div>			
				</div>


				

				

				{/* Education content starts here */}
				<div className='col-xs-12 col-lg-6 margin-above center-text'>
					<hr className='heading-spacer-about-me'/>				
					
					<div className='about-me-header'>Education</div>
					
					<hr className='heading-spacer-about-me'/>				

					<div> <img className='about-me-company-photo margin-above' src='../../Images/digitalcrafts-logo-1200-new.png' height="80" width="200" /> </div>
					{/* Text for dc description */}
					<div> 
						<p> DigitalCrafts is a sixteen week, immersive, full-time accelerated learning program. The goal of the program is to prepare its students to be full-stack developers and software engineers upon graduation. There is a strong emphasis on efficient code design, version control, responsive applications, and analytical thinking. Learn more <a target="_blank" href='http://www.digitalcrafts.com/'>here</a>!</p>						
					</div>

					<div> <img className='about-me-company-photo margin-above' src='../../Images/university-of-wisco-logo.png' /> </div>
				{/* Text university of wisconsin description */}
					<p> I graduated from the University of Wisconsin-Madison with a B.B.A in Finance. Outside of the classroom, I spent time working as a teaching assistant, working as a bouncer at a local bar, and playing tennis on the club team. </p>

				</div>

				{/* Skills, tools and qualifications starts here starts here */}

				<div className='col-xs-12 col-lg-6 margin-above center-text'>
					<hr className='heading-spacer-about-me'/>				

					<div className='about-me-header'>Skills, Tools, Qualifications </div>	
					
					<hr className='heading-spacer-about-me'/>								

					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'>

							<img className='skill-image' src='../../Images/Icons/html-logo.png' height="512" width="512" />
							<div>HTML</div>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/css3.png' />
							<div>CSS</div>

						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/Bootstrap.png'/>
							<div>Bootstrap</div>

						</div>

						
					</div>


					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4 skill-image-only-hover'><img className='skill-image' src='../../Images/Icons/Sass.png' />
							<div>Sass</div>
						</div>

						<div className='col-xs-4'><img className='skill-image' src='../../Images/Icons/javascript-logo.png' />
							<div>Javascript</div>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/jquery.png' />
							<div>jQuery</div>
						</div>						

					</div>	


					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/React.png' />
							<div>React.js</div>

						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/Redux.png' />
							<div>Redux.js</div>
						</div>							


						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/nodejs.png' />
							<div>Node.js</div>
						</div>
						
					</div>	

					<div className='col-xs-12 margin-above'> 	

						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/ExpressLogov2.png' height="34" width="90"/>
							<div>Express.js</div>
						</div>						

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/python.png' />
							<div>Python</div>
						</div>

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/MySQL.png'/>
							<div>MySQL</div>
						</div>												

					</div>	

					<div className='col-xs-12 margin-above'> 	

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/git.png' />
							<div>Git</div>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/github.png' />
							<div>Github</div>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/sourceTree.png'/>
							<div>Source Tree</div>
						</div>

						
						
						
						<div>&nbsp;</div>
					</div>	

					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/microsoftExcel.png'/>
							<div>Excel / Financial Modeling</div>
						</div>							


						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/microsoftPowerPoint.png'/>
							<div>PowerPoint</div>
						</div>


						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/capitalIQLogo.png' height="43" width="40"/>
							<div>Capital IQ</div>
						</div>																																																						
						
						<div>&nbsp;</div>
					</div>	
					
						
						
					{/*template div - <div className='col-md-2'><img className='skill-image' src='../../public/Images/Icons/React.png' /></div>*/}
					
					
					
				</div>				
				
				

			</div>




		)
	}
}

export default About;


