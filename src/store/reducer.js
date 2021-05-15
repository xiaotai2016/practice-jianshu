import {CHANGE_INPUT, ADD_LIST, DELETE_ITEM} from './actionType';

const defaultState = {
  inputValue:'',
  list:[1,2]
}

const mainReducer = (  state = defaultState, action )=>{
  if (action.type === CHANGE_INPUT) {
    const newstate = JSON.parse(JSON.stringify(state))
    newstate.inputValue = action.value
      return newstate
  }
  if (action.type === ADD_LIST) {
    const newList = [...state.list, state.inputValue]
    const newstate = {inputValue:'', list:newList}
    return newstate
  }
  if (action.type === DELETE_ITEM) {
    const newstate = JSON.parse(JSON.stringify(state));
    newstate.list.splice(action.index, 1);
    return newstate
  }
  return state
}

export default mainReducer;
