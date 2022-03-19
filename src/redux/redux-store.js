import { createStore, combineReducers, applyMiddleware } from 'redux';
import { postListReducer } from './post-list-reducer'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  postListPage: postListReducer
})



export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; 