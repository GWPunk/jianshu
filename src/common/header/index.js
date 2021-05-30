import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";
import * as loginActionCreator from "../../pages/login/store/actionCreator";
import { Link } from "react-router-dom";
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

class Header extends PureComponent {
  render() {
    const {
      focused,
      handleSearchFocus,
      handleSearchBlur,
      list,
      login,
      handleLoginOut,
    } = this.props;
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {login ? (
              <NavItem onClick={handleLoginOut} className="right">
                退出
              </NavItem>
            ) : (
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
            )}

            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={() => handleSearchFocus(list)}
                  onBlur={handleSearchBlur}
                />
              </CSSTransition>
              <i
                className={focused ? "focused iconfont zoom" : "iconfont zoom"}
              >
                &#xe614;
              </i>
              {this.getHotSearch(focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="write">
                <i className="iconfont">&#xe6e5;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
  getHotSearch(show) {
    const {
      list,
      mouseIn,
      page,
      totalPage,
      handChangeClick,
      handleMouseEnter,
      handleMouseLeave,
    } = this.props;
    const newList = list.toJS();
    let temp = [];

    //一开始渲染时list为空，此时key值全是undefined会报错警告
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        temp.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handChangeClick(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{temp}</SearchInfoList>
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
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"]),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSearchFocus(list) {
      list.size === 0 && dispatch(actionCreator.getSeachList());
      dispatch(actionCreator.getSeachFocus());
    },
    handleSearchBlur() {
      dispatch(actionCreator.getSeachBlur());
    },
    handChangeClick(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else originAngle = 0;
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      let newPage = page;
      if (newPage < totalPage) newPage++;
      else newPage = 1;
      dispatch(actionCreator.getChangeList(newPage));
    },
    handleMouseEnter() {
      dispatch(actionCreator.getMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.getMouseLeave());
    },
    handleLoginOut() {
      dispatch(loginActionCreator.loginOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
