import React, { PureComponent } from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              alt=""
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop}>返回</BackTop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    changeHomeData() {
      dispatch(actionCreator.getHomeData());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreator.toggleTopShow(true));
      } else {
        dispatch(actionCreator.toggleTopShow(false));
      }
    },
  };
};

export default connect(mapState, mapDispatch)(Home);
