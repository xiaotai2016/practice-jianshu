import { CHANGE_INPUT, ADD_LIST, DELETE_ITEM } from './actionType';

export const getInputValueAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

export const addListAction = ()=> ({
  type: ADD_LIST
})

export const deleteItemAction = (index) =>({
  type:DELETE_ITEM,
  index
})
