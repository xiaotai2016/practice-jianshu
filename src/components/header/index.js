import {
  HeaderDiv,
  NavDiv,
  Logo,
  NavItem,
  NavSearch
} from './style'

function Header (){
  return(
    <HeaderDiv>
      <Logo />
      <NavDiv>
        <NavItem className = 'left active'>Home</NavItem>
        <NavItem className = 'left'>Download APP</NavItem>
        <NavItem className = 'right'>Login</NavItem>
        <NavItem className = 'right'>Aa</NavItem>
        <NavSearch />
      </NavDiv>
    </HeaderDiv>
  )
}

export default Header;
