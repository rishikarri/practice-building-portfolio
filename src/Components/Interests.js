import React, { Component } from 'react';


class Interests extends Component{

	

	render(){
		var gandhiQuote = '“Live as if you were to die tomorrow. Learn as if you were to live forever.” —Gandhi'
		return(
			<div className="padding-none">
				<div className="row kill-margin">
					<div className="col-xs-12 quote-text"> 
						{gandhiQuote}
					</div>
				</div>

				<div className="row kill-margin">
					<div className="col-xs-5 cursive-font">
					My Interests
					</div>

					<div className="col-xs-2">
					
					</div>

					<div className="col-xs-5 cursive-font">
						What I am reading
					</div>
				</div>


				<div className="row kill-margin">
					<div className="col-xs-5 light-blue-column">
					
					</div>

					<div className="col-xs-2">
					
					</div>

					<div className="col-xs-5 light-green-column">

						<div className="col-xs-12 row kill-margin">

							<table>					
								<thead>
									<tr>
										<th> Book Title </th>
										<th> Date Completed: </th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td >&nbsp; </td>
										<td >&nbsp;</td>
									</tr>

									<tr>
										<td> Title </td>
										<td>1/26/2017</td>
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




							// <div className='col-xs-7'>
							// 	<div className="impact-font">Book Title:</div>
							// 	<div> &nbsp; </div>

							// 	<div className="data-entry">A Thousand Splendid Suns - Khaled Hosseini</div>
							// 	<div className="data-entry">A Thousand Splendid Suns - Khaled Hosseini</div>
							// 	<div className="data-entry">A Thousand Splendid Suns - Khaled Hosseini</div>
							// 	<div className="data-entry">A Thousand Splendid Suns - Khaled Hosseini</div>
							// 	<div className="data-entry">A Thousand Splendid Suns - Khaled Hosseini</div>

							// </div>

							

							// <div className="col-xs-4 col-xs-offset-1">
							// 	<div className="impact-font">Completed:</div>
							// 	<div> &nbsp; </div>

							// 	<div className="data-entry">1-26-2017</div>
							// 	<div className="data-entry">1-26-2017</div>
							// 	<div className="data-entry">1-26-2017</div>
							// 	<div className="data-entry">1-26-2017</div>
							// 	<div className="data-entry">1-26-2017</div>
							// 	<div className="data-entry">1-26-2017</div>
								
							// </div>