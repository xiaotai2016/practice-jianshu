import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { changeSearchInputFocusAction } from '../../store/createAction';
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

function Header (props){

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
            in = {props.focused}
            timeout={200}
            classNames = "slide"
          >
            <NavSearch
              className = {props.focused? 'focused' : ''}
              onFocus = {props.handleSearchFocus}
              onBlur = {props.handleSearchBlur}
            />
          </CSSTransition>
          <i className = { props.focused? 'focused iconfont icon-fangdajing' : 'iconfont icon-fangdajing' } />
        </SearchDiv>
      </NavDiv>
      <ButtonDiv>
        <Button className='write'><i className="iconfont icon-line-quillpenyumaobi" />Write Blogs</Button>
        <Button className='reg'>Register</Button>
      </ButtonDiv>
    </HeaderDiv>
  )
}

const mapStateToProps = (state) =>({
  focused: state.header.focused
})

const mapDispatchToProps = (dispatch) =>({
  handleSearchFocus: ()=>{dispatch(changeSearchInputFocusAction(true))},
  handleSearchBlur: ()=>{dispatch(changeSearchInputFocusAction(false))}
})

export default connect (mapStateToProps, mapDispatchToProps)(Header);
