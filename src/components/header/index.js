import {
  HeaderDiv,
  NavDiv,
  Logo 
} from './style'

function Header (){
  return(
    <HeaderDiv>
      <Logo />
      <NavDiv>
        This is the Header
      </NavDiv>
    </HeaderDiv>
  )
}

export default Header;
