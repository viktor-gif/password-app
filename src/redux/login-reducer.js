const SET_PASSWORDS = "SET_PASSWORDS";
const SET_USER_PASSWORD = "SET_USER_PASSWORD";
const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
const SET_TIME_TYPING_SYMBOLS = "SET_TIME_TYPING_SYMBOLS";
const CLEAR_TIMES_TYPING = "CLEAR_TIMES_TYPING";

let initialState = {
  passwords: [
    { password: "38gg49", timeTyping: 4784 },
    { password: "ojgjs90", timeTyping: 3764 },
    { password: "38gg49sgghsg", timeTyping: 5784 },
  ],
  userPassword: { password: "", timeTyping: 0 },
  isLoggedIn: false,
  timesTyping: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORDS:
      return {
        ...state,
        passwords: state.passwords.concat(action.password),
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        userPassword: action.password,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case SET_TIME_TYPING_SYMBOLS:
      return {
        ...state,
        timesTyping: state.timesTyping.concat(action.time),
      };
    case CLEAR_TIMES_TYPING:
      return {
        ...state,
        timesTyping: [],
      };

    default:
      return state;
  }
};
//action-creators
export const setPasswords = (password) => ({ type: SET_PASSWORDS, password });
export const setUserPassword = (password) => ({
  type: SET_USER_PASSWORD,
  password,
});
export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});
export const setTimeTypingSymbols = (time) => ({
  type: SET_TIME_TYPING_SYMBOLS,
  time,
});
export const clearTimesTyping = () => ({ type: CLEAR_TIMES_TYPING });

export default loginReducer;
