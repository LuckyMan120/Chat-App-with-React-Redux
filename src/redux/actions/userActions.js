import axios from 'axios';

export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user,
  };
};

export const updateUserList = list => {
  return {
    type: 'UPDATE_USERLIST',
    list,
  };
};

export const addUser = user => {
  console.log(`addUser inserting new user: ${user}`)
  return {
    type: 'ADD_USER',
    user,
  };
};

export const deleteUser = (user) => (dispatch, getState) => {
  axios.post('/messanger/deleteUser', {"username": user})
    .then(() => { })
    .catch(e => console.log(e));
   // dispatch(updateUser(''));
    dispatch(updateUserList([]));
};

export const submitUser = (user) => (dispatch, getState) => {
    axios.post('/messanger/postUser', {"username": user})
      .then(() => {console.log('updateUser posted: ' +user)})
      .catch(e => console.log(e));
};

