import React, { useEffect } from "react";
import {
  setPasswords,
  setTimeTypingSymbols,
  clearTimesTyping,
} from "../../redux/signup-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Signup from "./signup";

class SignupContainer extends React.Component {
  // componentDidMount() {
  //   this.props.setLoginData({ login: "lssfjf", password: 359349639 });
  // }
  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (prevProps.loginData !== this.props.loginData) {
  //     this.props.setLoginData({ login: "lssfjf", password: 359349639 });
  //   }
  // }
  render() {
    return (
      <Signup
        passwords={this.props.passwords}
        setPasswords={this.props.setPasswords}
        setTimeTypingSymbols={this.props.setTimeTypingSymbols}
        timesTyping={this.props.timesTyping}
        clearTimesTyping={this.props.clearTimesTyping}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    passwords: state.signupPage.passwords,
    timesTyping: state.signupPage.timesTyping,
  };
};

export default compose(
  connect(mapStateToProps, {
    setPasswords,
    setTimeTypingSymbols,
    clearTimesTyping,
  })
)(SignupContainer);
