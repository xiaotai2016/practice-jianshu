import {SEARCH_INPUT_FOCUS} from './actionType';

const defaultState = {
  focused: false
}

const headerReducer = (  state = defaultState, action )=>{
  switch (action.type) {
    case SEARCH_INPUT_FOCUS:
      const newState = JSON.parse(JSON.stringify(state));
      newState.focused = action.value;
      return newState
    default:
      return state
  }
}

export default headerReducer;
