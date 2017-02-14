import React, { Component } from 'react';


class Project extends Component{


	render(){
		return(
			<div>
				<div className='row kill-margin'>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1'>
						<hr className='heading-spacer'/>

						<div className='section-heading'>
							<h2>COMING SOON: Village Savior</h2>
							<p>Monsters and thieves are about to attack your village. Stave them off as long as you can in order to give the villagers time to escape! Be careful! If your health falls to 0 you must retreat!</p>
							<p> HTML & CSS, Javascript (Code is intentionally written without frameworks)</p>

							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='http://rishikarri.com/village-savior/'><button className='btn btn-primary'> Current Status Of Game</button></a>
								<a target="_blank" href='https://github.com/rishikarri/village-savior'><button className='btn btn-primary'> Repository</button></a>
							</div>
						</div>
					</div>

					<div className='col-xs-12 col-sm-5'>						
						<img className='project-image margin-above' src='../../Images/Projects-Page/survivor-screenshot.png' />
					</div>


				</div>

				<div className='row kill-margin'>

					<div className='col-xs-12 hide-word-worm col-sm-5 col-sm-offset-0'>
						<img className='project-image-word-worm margin-above' src='../../Images/Projects-Page/BookWorm.png' />
					</div>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1'>						
						

						<hr className='heading-spacer'/>

						<div className='section-heading'>
							<h2>COMING SOON: WordWorms</h2>

							<p>A word learning app for children. Users are able to take vocabulary quizzes, look up words, and much more!</p>
							<p> HTML & CSS, Bootstrap, React.js & React-Router, Javascript (ES-6), jQuery</p>

							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='#'><button className='btn btn-primary'> Current Status Of Game</button></a>
								<a target="_blank" href='https://github.com/CaseyTM/WordWorms'><button className='btn btn-primary'> Repository</button></a>
							</div>							
						</div>						
					</div>

					<div className='col-xs-12 show-word-worm col-sm-5 col-sm-offset-1'>
						<img className='project-image-word-worm margin-above' src='../../Images/Projects-Page/BookWorm.png' />
					</div>


				</div>


			</div>
		)
	}
}

export default Project;