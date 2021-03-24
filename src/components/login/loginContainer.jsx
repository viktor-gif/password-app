import React from "react";
import {
  setUserPassword,
  setIsLoggedIn,
  setTimeTypingSymbols,
  clearTimesTyping,
} from "../../redux/login-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./login";

class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        passwords={this.props.passwords}
        userPassword={this.props.userPassword}
        setUserPassword={this.props.setUserPassword}
        setIsLoggedIn={this.props.setIsLoggedIn}
        isLoggedIn={this.props.isLoggedIn}
        setTimeTypingSymbols={this.props.setTimeTypingSymbols}
        timesTyping={this.props.timesTyping}
        clearTimesTyping={this.props.clearTimesTyping}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    passwords: state.login.passwords,
    userPassword: state.login.userPassword,
    isLoggedIn: state.login.isLoggedIn,
    timesTyping: state.login.timesTyping,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserPassword,
    setIsLoggedIn,
    setTimeTypingSymbols,
    clearTimesTyping,
  })
)(LoginContainer);
