import React, { useState } from "react";
import { Redirect } from "react-router";
import s from "./login.module.css";
import { SignUpIn } from "../signup/signup";

const Login = ({
  passwords,
  userPassword,
  setUserPassword,
  setIsLoggedIn,
  setTimeTypingSymbols,
  timesTyping,
  clearTimesTyping,
}) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [unSuccessAlert, setunSuccessAlert] = useState(false);

  const onPasswordChange = (e) => {
    setTimeTypingSymbols(Date.now());
    setPasswordValue(e.target.value);
  };

  const onFormSubmit = () => {
    const timeTypingPass = timesTyping[timesTyping.length - 1] - timesTyping[0];

    //валидация
    if (passwordValue.length < 6) {
      alert("Ведите пароль длинной не менее 6 символов");
      setPasswordValue("");
      clearTimesTyping();
    } else {
      setUserPassword({ password: passwordValue, timeTyping: timeTypingPass });
      setPasswordValue("");
      clearTimesTyping();
      setunSuccessAlert(true);
    }
  };

  //создаём два массива на основании объекта. эту часть постараюсь пофиксить.
  let allPasswords = [];
  passwords.map((p) => allPasswords.push(p.password));
  const indexPassword = allPasswords.indexOf(userPassword.password);

  let allTime = [];
  passwords.map((p) => allTime.push(p.timeTyping));

  const password = userPassword.password;

  const passLength = indexPassword !== -1 && allPasswords[indexPassword].length;
  const loginTime = allTime[indexPassword];
  const maxTime = loginTime + passLength * 100;
  const minTime = loginTime - passLength * 100;

  const time = userPassword.timeTyping;

  //Расщитываем мин. и макс. отклонение от эталонного времени набора пароля
  if (allPasswords.includes(password) && time < maxTime && time > minTime) {
    setIsLoggedIn(true);
    return <Redirect to="/website" />;
  } else if (unSuccessAlert) {
    alert("Авторизация не увенчалась успехом. Попробуйте ещё раз...");
    setunSuccessAlert(false);
  }

  return (
    <>
      <SignUpIn
        onFormSubmit={onFormSubmit}
        passwordValue={passwordValue}
        onPasswordChange={onPasswordChange}
        to="/signup"
        signLog="Создать аккаунт"
        upIn="Log in"
      />
    </>
  );
};

export default Login;
