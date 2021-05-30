import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreator from "./store/actionCreator";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    getDetailData(id) {
      dispatch(actionCreator.getDetailData(id));
    },
  };
};

export default connect(mapState, mapDispatch)(withRouter(Detail));
