import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    const { login, handleLoginClick } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => (this.account = input)} />
            <Input
              placeholder="密码"
              ref={(input) => (this.password = input)}
            />
            <Button
              onClick={() => handleLoginClick(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = (state) => {
  return {
    login: state.getIn(["login", "login"]),
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleLoginClick(accountElem, passwordElem) {
      const account = accountElem.value;
      const password = accountElem.value;
      dispatch(actionCreator.Login(account, password));
    },
  };
};

export default connect(mapState, mapDispatch)(Login);
