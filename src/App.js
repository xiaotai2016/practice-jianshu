import React from 'react';
import Header from './components/header'
import './statics/iconfont/iconfont.css'

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
