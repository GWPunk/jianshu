import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import * as actionCreator from "../store/actionCreator";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to="/detail">
              <ListItem>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"]),
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    getMoreList(page) {
      dispatch(actionCreator.getMoreList(page));
    },
  };
};

export default connect(mapState, mapDispatch)(List);
