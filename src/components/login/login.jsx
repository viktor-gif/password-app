import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { clearTimesTyping } from "../../redux/signup-reducer";
import s from "./login.module.css";

const Login = ({
  passwords,
  userPassword,
  setUserPassword,
  setIsLoggedIn,
  isLoggedIn,
  setTimeTypingSymbols,
  timesTyping,
  clearTimesTyping,
}) => {
  const [passwordValue, setPasswordValue] = useState("");

  const onPasswordChange = (e) => {
    setTimeTypingSymbols(Date.now());
    setPasswordValue(e.target.value);
  };

  const onFormSubmit = () => {
    const timeTypingPass = timesTyping[timesTyping.length - 1] - timesTyping[0];

    setUserPassword({ password: passwordValue, timeTyping: timeTypingPass });
    setPasswordValue("");
    clearTimesTyping();
  };
  console.log(passwords);
  let allPasswords = [];
  passwords.map((p) => allPasswords.push(p.password));
  const indexPassword = allPasswords.indexOf(userPassword.password);

  let allTime = [];
  passwords.map((p) => allTime.push(p.timeTyping));

  const password = userPassword.password;

  const passLength = indexPassword !== -1 && allPasswords[indexPassword].length;
  const loginTime = allTime[indexPassword];
  const maxTime = loginTime + passLength * 50;
  const minTime = loginTime - passLength * 50;

  const time = userPassword.timeTyping;

  if (allPasswords.includes(password) && time < maxTime && time > minTime) {
    setIsLoggedIn(true);
    return <Redirect to="/website" />;
  } else {
    console.log("Авторизация не увенчалась успехом. Попробуйте ещё раз...");
  }
  console.log(isLoggedIn);
  // const toSignup = () => {
  //   return (
  //     <div>
  //       <Redirect to="/website" />
  //     </div>
  //   );
  // };

  return (
    <section className={s.login}>
      <div className={s.toSignup}>
        <NavLink to="/signup">
          <button>Sign up</button>
        </NavLink>
      </div>

      <h3>Введите пароль вручную, чтобы проверить стиль ввода</h3>

      <form className={s.loginForm} onSubmit={onFormSubmit}>
        <div classname={s.loginInput}>
          <input
            type="password"
            placeholder="Type your password"
            value={passwordValue}
            onChange={onPasswordChange}
          />
        </div>
        <div className={s.loginSubmit}>
          <button>Log in</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
