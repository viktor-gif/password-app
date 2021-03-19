import React, { useState, useEffect } from "react";
import s from "./signup.module.css";
import { NavLink } from "react-router-dom";
import { setLoginData } from "../../redux/signup-reducer";

const Signup = ({
  passwords,
  setPasswords,
  setTimeTypingSymbols,
  timesTyping,
  clearTimesTyping,
}) => {
  const [passwordValue, setPasswordValue] = useState("");
  // const [timeTyping, setTimeTyping] = useState(null);

  const onPasswordChange = (e) => {
    setTimeTypingSymbols(Date.now());
    setPasswordValue(e.target.value);
  };

  const onFormSubmit = () => {
    const timeTypingPass = timesTyping[timesTyping.length - 1] - timesTyping[0];
    // console.log(passwordValue.length);
    console.log(timeTypingPass);
    // console.log(timeTypingPass / passwordValue.length);

    setPasswords({ password: passwordValue, timeTyping: timeTypingPass });
    setPasswordValue("");
    clearTimesTyping();
  };
  console.log(passwords);

  return (
    <section className={s.signup}>
      <div className={s.toLogin}>
        <NavLink to="/login">
          <button>Log in</button>
        </NavLink>
      </div>

      <h3>Введите пароль вручную, чтобы проверить стиль ввода</h3>

      <form className={s.signupForm} onSubmit={onFormSubmit}>
        <input className={s.autoCompleteOffHelper} type="text" />
        <input className={s.autoCompleteOffHelper} type="password" />
        <div className={s.signupInput}>
          <input
            type="password"
            placeholder="Type your password"
            value={passwordValue}
            onChange={onPasswordChange}
            autoComplete="off"
          />
        </div>
        <div className={s.signupSubmit}>
          <button>Sign up</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
