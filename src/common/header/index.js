import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";

class Header extends Component {
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
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? "focused" : ""}
                  onFocus={this.props.handleSearchFocus}
                  onBlur={this.props.handleSearchBlur}
                />
              </CSSTransition>
              <i
                className={this.props.focused ? "focused iconfont" : "iconfont"}
              >
                &#xe614;
              </i>
              {this.getHotSearch(this.props.focused)}
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
  getHotSearch(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchFocus() {
      const active = actionCreator.getSeachFocus();
      dispatch(active);
    },
    handleSearchBlur() {
      const active = actionCreator.getSeachBlur();
      dispatch(active);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
