import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header'
import './statics/iconfont/iconfont.css'

import { getInputValueAction, addListAction, deleteItemAction } from './store/createAction'
import { GlobalStyle } from "./style"

function App() {

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Header />
    </React.Fragment>
  )
}

export default App;
