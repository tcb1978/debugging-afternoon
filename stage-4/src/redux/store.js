import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import redux from 'react-redux'

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));