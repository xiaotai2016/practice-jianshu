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
  max-width: 1440px;
  min-width: 768px;
  height: 100%;
  background: green;
  margin: 0 auto;
`;
