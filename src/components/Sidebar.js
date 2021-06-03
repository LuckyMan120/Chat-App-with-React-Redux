
import React, { Component } from 'react'
import '../App.css';

class Sidebar extends Component {

    render () {
        return (
    
	<aside id="sidebar" className="sidebar">
	   <div className="ui fluid container" >
		<ul style={{listStyleType: 'circle', lineHeight: '145%', marginLeft: 35, marginTop: 18, fontSize: '21px'}}>
			{this.props.users.map((user, i) => 
				<li key={i}>{user.username}</li>
			)}
		</ul>
		</div>
	</aside>
)}}

export default Sidebar