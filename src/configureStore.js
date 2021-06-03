import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from "redux"
import messageReducer from './redux/reducers/messageReducer';
import userReducer from './redux/reducers/userReducer';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const rootReducer = combineReducers({
    messageReducer, userReducer
  });
  
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}