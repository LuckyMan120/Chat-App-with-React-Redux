const INITIAL_STATE = {
    userList: [],
    currentUser: 'timmy',
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          currentUser: action.user,
        };

      case 'UPDATE_USERLIST':
        return {
          ...state,
          userList: action.list,
        };

      case 'ADD_USER':
        return {
          ...state,
          userList: [...state.userList, action.user],  
        };

      default:
        return state;
    }
  };
  
  export default userReducer;