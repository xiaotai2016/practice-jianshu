import {
  HeaderDiv,
  NavDiv,
  Logo,
  NavItem,
  NavSearch,
  ButtonDiv,
  Button
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
      <ButtonDiv>
        <Button className='write'>Write Blogs</Button>
        <Button className='reg'>Register</Button>
      </ButtonDiv>
    </HeaderDiv>
  )
}

export default Header;
