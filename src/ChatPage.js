import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMessages, handlTextChange, submitMessage } from './redux/actions/messageActions';
import { updateUserList, deleteUser} from './redux/actions/userActions';
import Sidebar from "./components/Sidebar";
import MessagesList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import NavBar from "./components/Navbar";
import './App.css';

class ChatPage extends Component {
  componentDidMount() {
    axios.get('/messanger/getMessages')
      .then((res) => {
        //filters out the id attribute from the database array, saves to redux store:
        const resultArray = (res.data);
        const messageList = resultArray.map(({type, ...keepAttrs}) => keepAttrs);
        this.props.updateMessages(messageList);
      })
      
      .catch((e) => {
        console.log(e);
      });

      axios.get('/messanger/getUsers')
      .then((res) => {
        console.log(res.data)
        //filters out the data portion from the database array, saves to redux store:
        const resultArray = (res.data);
        const userList = resultArray.map(({type, ...keepAttrs}) => keepAttrs);
        console.log(userList)
        this.props.updateUserList(userList);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  logOut = () => {
     this.props.deleteUser(this.props.user);
     this.props.clearUsername();
  }

  render() {
     return (

          <div>
            <NavBar logOutButton ={this.logOut}/>   
            <div id="container">
              <Sidebar users={this.props.userList}/>
                 <section id="main">
                    <MessagesList messages={this.props.messages} currentUser={this.props.user}/>
                    <AddMessage />
                  </section>
              </div>
          </div>
    )}}

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
    text: state.messageReducer.text,
    user: state.userReducer.currentUser,
    userList: state.userReducer.userList,
  };
};

const mapDispatchToProps = { updateMessages, updateUserList, handlTextChange, submitMessage, deleteUser };

export default connect( // from react-redux
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
