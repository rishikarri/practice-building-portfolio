import React, { Component } from 'react';


class Interests extends Component{

	

	render(){
		var gandhiQuote = '“Live as if you were to die tomorrow. Learn as if you were to live forever.” —Gandhi';
		var whatIamReading = "What I'm reading"
		return(
			<div className="padding-none">
				<div className="row kill-margin">
					{/*header section*/}
					<div className="row kill-margin">				
					
						<div className="col-xs-12 quote-text"> 

							{gandhiQuote}
						</div>
					</div>

					{/*Body section*/}
					<div className="row kill-margin">
						<div className='col-xs-12 cursive-font light-green-span margin-above'> 
							My Interests
						</div>

						<div className='col-xs-6 col-xs-offset-2 center-text padding-none'> 
							<table className='margin-above'>

								<tbody>

									<tr className='tallest-table-rows'>
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/tennis-ball.png' /> Tennis</td>
										<td className='spacer-column data-entry'>&nbsp;</td>										
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/spanish-language-clipart.jpg' /> Spanish</td>
									</tr>

									<tr className='tallest-table-rows'>
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/guitar-clipart.gif'/> Guitar</td>
										<td className='data-entry'>&nbsp;</td>										
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/ukulele-icon.png' /> Ukulele</td>
									</tr>	

									<tr className='tallest-table-rows'>
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/reading-clipart.png' /> Reading</td>
										<td className='data-entry'>&nbsp;</td>										
										<td className='data-entry'><img className='interests-image' src='../../Images/Interests/running-clipart.png' /> Running</td>
									</tr>											
								</tbody>
							</table>
						</div>						
					</div>		

					<div className="row kill-margin">
						<div className='col-xs-12 cursive-font light-blue-span margin-above'> 
							{whatIamReading}
						</div>

						<div className='col-xs-6 col-xs-offset-2 center-text padding-none'> 
							<table className='margin-above'>
								<thead>
									<tr className='taller-table-rows'>
										<td className='title-or-date'>Book Title:</td>										
										<td className='title-or-date'>Author:</td>
										<td className='title-or-date'>Completed On:</td>
									</tr>
								</thead>

								<tbody>

									<tr className='taller-table-rows'>
										<td className='data-entry'>The Autobiography of Martin Luther King Jr. </td>
										<td className='data-entry'>Martin Luther King Jr.</td>										
										<td className='data-entry'>Currently Reading</td>										
									</tr>

									<tr className='taller-table-rows'>
										<td className='data-entry'>A Thousand Splendid Suns</td>
										<td className='data-entry'>Khaled Hosseini</td>																				
										<td className='data-entry'>1/26/2017</td>										
									</tr>

									<tr className='taller-table-rows'>
										<td className='data-entry'>8 Minute Meditation</td>
										<td className='data-entry'>Victor Davich</td>																				
										<td className='data-entry'>1/8/2017</td>										
									</tr>		

									<tr className='taller-table-rows'>
										<td className='data-entry'>Everburn</td>
										<td className='data-entry'>Robert Bunch</td>																																								
										<td className='data-entry'>1/3/2017</td>										
									</tr>		

									<tr className='taller-table-rows'>
										<td className='data-entry'>And The Mountains Echoed</td>
										<td className='data-entry'>Khaled Hosseini</td>																																								
										<td className='data-entry'>11/20/2016</td>										
									</tr>		

									<tr className='taller-table-rows'>
										<td className='data-entry'>The One Thing</td>	
										<td className='data-entry'>Gary W. Keller & Jay Papasan</td>																																																											
										<td className='data-entry'>10/25/2016</td>										
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Interests;



// <div className="row kill-margin">
// 					<div className="col-xs-5 cursive-font">
// 					My Interests
// 					</div>

// 					<div className="col-xs-2">
					
// 					</div>

// 					<div className="col-xs-5 cursive-font">
// 						What I am reading
// 					</div>
// 				</div>


// 				<div className="row kill-margin">
// 					<div className="col-xs-5 light-blue-column">
					
// 					</div>

// 					<div className="col-xs-2">
					
// 					</div>

// 					<div className="col-xs-5 light-green-column">

// 						<div className="col-xs-12 row kill-margin">

// 							<table>					
// 								<thead>
// 									<tr>
// 										<th> Book Title </th>
// 										<th> Date Completed: </th>
// 									</tr>
// 								</thead>

// 								<tbody>
// 									<tr>
// 										<td >&nbsp; </td>
// 										<td >&nbsp;</td>
// 									</tr>

// 									<tr>
// 										<td> Title </td>
// 										<td>1/26/2017</td>
// 									</tr>
// 								</tbody>
// 							</table>


// 						</div>						

						
						
// 					</div>
// 				</div>

// 				