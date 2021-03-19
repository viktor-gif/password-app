import logo from "./logo.svg";
import "./App.css";
import Website from "./components/website/Website";
import store from "./redux/redux-store";
import SignupContainer from "./components/signup/signupContainer";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import LoginContainer from "./components/login/loginContainer";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <NavBar />
          <Route path={"/website"} render={() => <Website />} />
          <Route path={"/signup"} render={() => <SignupContainer />} />
          <Route path={"/login"} render={() => <LoginContainer />} />
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
