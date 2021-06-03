import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class NavBar extends Component {


   render () {
       return (
        <Menu style={{marginBottom: 0, border: '1px solid #3f3f3f'}}>
          <Menu.Menu >
             <Menu.Item >
              <h2>Developer Chat : Final Project</h2> 
             </Menu.Item>
           </Menu.Menu>

           <Menu.Menu position="right">
     
               <Menu.Item     >
                    <Button color='blue'
                            onClick={this.props.logOutButton
                            }>
                             Log Out
                    </Button>
               </Menu.Item>
            </Menu.Menu>
         </Menu>
       );
    }
}

export default NavBar;