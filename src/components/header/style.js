import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderDiv = styled.div`
  postion: relative;
  height:56px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
`;

export const Logo = styled.a.attrs({
  href:'/'
  })`
  position: absolute;
  top: 0;
  left: 0;
  display :block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const NavDiv = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
  float: left;
  .slide-enter{
   transition: all 200ms ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all 200ms ease-out;
  }
  .slide-exit-action{
    width: 160px;
  }
  .iconfont{
    position:absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width:160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  &.focused {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  border-radius: 19px;
  border: 1px solid #ec6146;
  &.reg{
    color:#ec6146;
  }
  &.write{
    color: white;
    background: #ec4619
  }
`;
