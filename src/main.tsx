import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import someTypeScript from "./someTypeScript";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import * as Constants from "./constants";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: someTypeScript("Test-block for css-modules"),
    };
    // test class-dead-code
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  render() {
    return (
      <StrictMode>
        <Router>
          <Header siteName={Constants.SITE_NAME} link={Constants.HOME_URL} />
          <Switch>
            <Route path={Constants.PRODUCTS_URL}>
              <Products />
            </Route>
            <Route path={Constants.ABOUT_URL}>
              <About />
            </Route>
            <Route path={Constants.SIGNIN_URL}>
              <SignIn />
            </Route>
            <Route path={Constants.SIGNUP_URL}>
              <SignUp />
            </Route>
            <Route path={Constants.HOME_URL}>
              <Home />
            </Route>
          </Switch>
          <Footer siteName={Constants.SITE_NAME} />
        </Router>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
