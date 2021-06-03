import React from 'react'
import '../App.css';

const Message = ({message, author}) => (
	<p style={  author=== 'Me'? {color:'#7B1FA2', margin: 5} : {color:'black', margin: 5}}> 
	     <i> {author}: {message} </i>
	</p>)

export default Message