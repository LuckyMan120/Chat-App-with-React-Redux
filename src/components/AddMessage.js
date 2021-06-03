import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handlTextChange, submitMessage } from '../redux/actions/messageActions';
import '../App.css';


class AddMessage extends Component {

  onSubmit = () => {
    this.props.submitMessage();
  }

  handleTextChange = (e) => {
    this.props.handlTextChange(e.target.value);
  }

  render() {

	return (
		<section id="new-message">
            <input type="text" value={this.props.text} onChange={this.handleTextChange}
                placeholder="Type here to chat.."
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						this.props.submitMessage();
					}
				}}
			/>  
		</section>
	)}
}

const mapStateToProps = (state) => {
    return {
      messages: state.messageReducer.messages,
      text: state.messageReducer.text,
      user: state.userReducer.currentUser,
      userList: state.userReducer.userList,
    };
  };
  
  const mapDispatchToProps = { handlTextChange, submitMessage };
  
  export default connect( 
    mapStateToProps,
    mapDispatchToProps,
  )(AddMessage);

