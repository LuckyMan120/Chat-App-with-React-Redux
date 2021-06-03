import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, addUser } from './redux/actions/userActions';
import '../../App.css';


class Login extends Component {


logIn = (e) => {
    e.preventDefault()
    this.props.setUsername(e.target.username.value);
}

    render() {
      return (
        <div id= 'login'>
            <label>Username: </label>
            <form onSubmit={this.logIn}> 
                <input type="text" id="username"/> 
                <input type="submit" value="Join Chat"/>
            </form>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.currentUser,
    };
  };
  
  const mapDispatchToProps = { updateUser, addUser };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login);
