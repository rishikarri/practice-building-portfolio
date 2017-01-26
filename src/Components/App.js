import React, { Component } from 'react';
import '../CSS/styles.css';

// bring in bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



// bring in necessary components

import SideNavBar from './SideNavBar.js'
import '../CSS/styles.css'


// bring in sidenavbar which should take up one third of the page
//for now you always want to have side bar on the page and then render the children based on what url is in play 
class App extends Component {
  render() {

    return (
         <div className="container-fluid">
            <div className="row">
            	<div className="col-xs-3 padding-none">
                	<SideNavBar />
                	
                </div>

                <div className='col-xs-9 full-view-height padding-none'>
                	{this.props.children}
                </div>
                
            </div>
         </div>

    )
  }
}

export default App;
