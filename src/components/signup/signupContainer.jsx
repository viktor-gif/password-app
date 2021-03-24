import React from "react";
import {
  setPasswords,
  setTimeTypingSymbols,
  clearTimesTyping,
} from "../../redux/login-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Signup from "./signup";

class SignupContainer extends React.Component {
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
    passwords: state.login.passwords,
    timesTyping: state.login.timesTyping,
  };
};

export default compose(
  connect(mapStateToProps, {
    setPasswords,
    setTimeTypingSymbols,
    clearTimesTyping,
  })
)(SignupContainer);
