import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import s from "./navBar.module.css";

const NavBar = (props) => {
  const please = () => {
    alert("Log in please");
  };
  return (
    <nav className={s.nav}>
      <NavLink to="/website">
        <button className={s.navButton} onClick={!props.isLoggedIn && please}>
          To web-site
        </button>
      </NavLink>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

export default compose(connect(mapStateToProps, {}))(NavBar);
