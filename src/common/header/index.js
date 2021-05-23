import React, {Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem, NavSearch,Addition,Button} from './style'

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录 </NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearch/>
          </Nav>
          <Addition>
            <Button className="write">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}
export default Header  