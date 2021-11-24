import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import Footer from "./components/footer/footer";

type AppProps = Record<string, never>;
type AppState = {
  err: boolean;
};
interface Error {
  stack?: string;
}
export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      err: false,
    };
  }

  // @ts-ignore
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    alert(error);
    console.error(error);
  }

  // @ts-ignore
  static getDerivedStateFromError(error: Error) {
    return { err: true };
  }

  render() {
    if (!this.state.err) {
      return (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/product/:category" />
              <Route exact path="/about" component={About} />
              <Route path="/signIn" />
              <Route path="/signUp" />
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </Router>
        </div>
      );
    }

    return <div>oops we have some problems</div>;
  }
}
