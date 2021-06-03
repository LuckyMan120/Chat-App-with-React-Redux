import React, { Component } from 'react'
import Message from './Message'
import '../App.css';

class MessagesList extends Component {

    render(){
       return (
	   <section id="messages-list" >
		<ul style={{fontSize: '18px'}}>
            {this.props.messages.map((message, i) => 
                <Message key={i} 
                      message={message.message}
            author={message.author === this.props.currentUser? 'Me' : message.author}/>)}    
		</ul>

	</section>
)}}

export default MessagesList