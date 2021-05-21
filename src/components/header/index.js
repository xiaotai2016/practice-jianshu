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
        <NavItem className = 'right'><i className="iconfont icon-Aa" /></NavItem>
        <NavSearch />
        <i className="iconfont icon-fangdajing" />
      </NavDiv>
      <ButtonDiv>
        <Button className='write'><i className="iconfont icon-line-quillpenyumaobi" />Write Blogs</Button>
        <Button className='reg'>Register</Button>
      </ButtonDiv>
    </HeaderDiv>
  )
}

export default Header;
