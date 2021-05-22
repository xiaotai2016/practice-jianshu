import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderDiv,
  NavDiv,
  Logo,
  NavItem,
  NavSearch,
  ButtonDiv,
  Button,
  SearchDiv
} from './style';

function Header (){
  const [focused, setFocused] = useState(false);

  const handleSearchFocus = () => {
    setFocused(true);
  };

  const handleSearchBlur = () =>{
    setFocused(false);
  };

  return(
    <HeaderDiv>
      <Logo />
      <NavDiv>
        <NavItem className = 'left active'>Home</NavItem>
        <NavItem className = 'left'>Download APP</NavItem>
        <NavItem className = 'right'>Login</NavItem>
        <NavItem className = 'right'><i className="iconfont icon-Aa" /></NavItem>
        <SearchDiv>
          <CSSTransition
            in = {focused}
            timeout={200}
            classNames = "slide"
          >
            <NavSearch
              className = {focused? 'focused' : '123'}
              onFocus = {handleSearchFocus}
              onBlur = {handleSearchBlur}
            />
          </CSSTransition>
            <i className = { focused? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing' } />
        </SearchDiv>
      </NavDiv>
      <ButtonDiv>
        <Button className='write'><i className="iconfont icon-line-quillpenyumaobi" />Write Blogs</Button>
        <Button className='reg'>Register</Button>
      </ButtonDiv>
    </HeaderDiv>
  )
}

export default Header;
