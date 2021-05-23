import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录 </NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.state.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.handleSearchFocus}
                  onBlur={this.handleSearchBlur}
                />
              </CSSTransition>

              <i
                className={this.state.focused ? "focused iconfont" : "iconfont"}
              >
                &#xe614;
              </i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="write">
              <i className="iconfont">&#xe6e5;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
  handleSearchFocus() {
    this.setState({
      focused: true,
    });
  }
  handleSearchBlur() {
    this.setState({
      focused: false,
    });
  }
}
export default Header;
