import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { compose } from "redux";

class Website extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <h1>Welcome to our web-site!!!</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.signupPage.isLoggedIn,
  };
};

export default compose(connect(mapStateToProps, {}))(Website);
