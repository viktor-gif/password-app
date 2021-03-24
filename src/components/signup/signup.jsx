import React, { useState, useEffect } from "react";
import s from "./signup.module.css";
import { NavLink } from "react-router-dom";

const Signup = ({
  passwords,
  setPasswords,
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

    //Валидация
    if (passwordValue.length < 6) {
      alert("Ведите пароль длинной не менее 6 символов");
      setPasswordValue("");
      clearTimesTyping();
    } else {
      setPasswords({ password: passwordValue, timeTyping: timeTypingPass });
      setPasswordValue("");
      clearTimesTyping();
      alert(
        "Вы оформили подписку. Теперь войдите в свой аккаунт, пожалуйста. Спасибо :-)"
      );
    }
  };

  return (
    <>
      <SignUpIn
        onFormSubmit={onFormSubmit}
        passwordValue={passwordValue}
        onPasswordChange={onPasswordChange}
        to="/login"
        signLog="Войти в свой аккаунт"
        upIn="Sign up"
      />
    </>
  );
};

//общий компонент для регистрации и для логина
export const SignUpIn = (props) => {
  return (
    <section className={s.signup}>
      <div className={s.toLogin}>
        <NavLink to={props.to}>
          <button>{props.signLog}</button>
        </NavLink>
      </div>

      <h3>Введите пароль вручную, чтобы проверить стиль ввода</h3>

      <form className={s.signupForm} onSubmit={props.onFormSubmit}>
        <input className={s.autoCompleteOffHelper} type="text" />
        <input className={s.autoCompleteOffHelper} type="password" />
        <div className={s.signupInput}>
          <input
            type="password"
            placeholder="Type your password"
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            autoComplete="off"
          />
        </div>
        <div className={s.signupSubmit}>
          <button>{props.upIn}</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
