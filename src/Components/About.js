import React, { Component } from 'react';


class About extends Component{


	render(){
		return(
			<div className="padding-none">
				<div className='col-xs-12'>
					<div className='col-xs-12 col-sm-3 col-md-1 personal-photo-div col-lg-3'>
						<img className='personal-photo' src='../../Images/professional-picture-of-me.jpeg'/>
					</div>

					<div className='col-xs-12 col-sm-9 col-md-11 col-lg-6 description-text'>
						My name is Rishi. I love to code and have a passion for finance. 
					</div>	

					<div className='col-xs-12 col-sm-9 col-md-11 col-lg-6 description-text-smaller margin-above padding-right-zero'>
					Prior to web development, I worked as an investment banker (Technology & Services Group) for <a href='http://www.rwbaird.com/investment-banking/'>Robert W. Baird.</a>
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
						<ul className='margin-above'>
							<li className='text-align-left'> 16 week immersive, full-time accelerated learning program </li>
							<li className='text-align-left'> The program covers HTML & CSS, Bootstrap, Javascript, React.js, Node.js, SQL, Python, as well as several other tools in order to prepare students to work as Full Stack Developers and Software Engineers</li>
							<li className='text-align-left'>Strong emphasis on efficient code design, version control, web design patterns, and analytical thinking</li>
						</ul>						
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

						<div className='col-xs-3'>

							<img className='skill-image' src='../../Images/Icons/html-logo.png' height="512" width="512" />
							<div>HTML</div>
						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/css3.png' />
							<div>CSS</div>

						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/Bootstrap.png'/>
							<div>Bootstrap</div>

						</div>

						<div className='col-xs-3'><img className='skill-image' src='../../Images/Icons/Sass.png' />
							<div>Sass</div>
						</div>
					</div>


					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-3'><img className='skill-image' src='../../Images/Icons/javascript-logo.png' />
							<div>Javascript</div>
						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/jquery.png' />
							<div>jQuery</div>
						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/React.png' />
							<div>React.js</div>

						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/Redux.png' />
							<div>Redux.js</div>
						</div>						

					</div>	


					<div className='col-xs-12 margin-above'> 	


						<div className='col-xs-3'>
							<img className='' src='../../Images/Icons/nodejs.png' />
							<div>Node.js</div>
						</div>

						<div className='col-xs-3'><img className='' src='../../Images/Icons/git.png' />
							<div>Git</div>
						</div>

						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/github.png' />
							<div>Github</div>
						</div>
						<div className='col-xs-3'>
							<img className='skill-image' src='../../Images/Icons/python.png' />
							<div>Python</div>
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
