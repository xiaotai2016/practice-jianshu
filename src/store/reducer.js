import { combineReducers } from 'redux';
import {headerReducer} from '../components/header/store'

const mainReducer = combineReducers ({
  header:headerReducer
})

export default mainReducer;
