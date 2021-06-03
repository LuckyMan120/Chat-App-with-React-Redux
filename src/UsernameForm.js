import React, { Component } from 'react'
import axios from 'axios';
import './UsernameForm.css';


class UsernameForm extends Component {
 constructor(props) {
   super(props)

   this.state = {
      message: 'Welcome to our Chat Application!'
   }

   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }


 onSubmit(e) {
   let temp = e.target.username.value;
   e.preventDefault()
   console.log(temp)

   axios.post('/messanger/verifyUser', {"username": temp})
   .then((response) => {
      console.log(response)
      console.log('response.data: ' +response.data)
      if (response.data) {
        this.props.setUsername(temp);
      } else {
        this.setState({ message: 'Username taken. Please enter a username:' });
      }
  }).catch(e => console.log(e));
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">
        <div className="widget">
          <h2>{this.state.message}</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Please enter a username here: "
              id="username"
              onChange={this.onChange}
            />
            <input type="submit" value="Join Chat"/>
          </form>
          </div>
       </header>
     </div>
   )
  }
}

 export default UsernameForm