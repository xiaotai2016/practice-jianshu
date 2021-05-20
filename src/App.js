import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header'

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
