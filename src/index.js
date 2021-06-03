import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {insertMessage} from './redux/actions/messageActions';
import {addUser} from './redux/actions/userActions';
import configureStore from './configureStore'

const store = configureStore()

const webSocket = new WebSocket('ws://localhost:4000/websocket');

//This handles incoming message and user events, saves new data with reducer actions:
webSocket.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const payload = (data.payload)
  switch (data.type) {
    case "messageType":
      store.dispatch(insertMessage(payload));
      break 
    case "userType":
      store.dispatch(addUser(payload));
      break 
    default:
      break
  }
};


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
