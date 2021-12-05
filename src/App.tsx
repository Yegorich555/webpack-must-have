import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Component } from "react";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import { links } from "./constants/constants";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

class App extends Component<unknown, unknown> {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={links.home} component={Home} />
            <ErrorBoundary>
              <Route exact path="/products" component={Product} />
              <Route path={`${links.products}/:platform`} component={Product} />
              <Route exact path={links.about} component={About} />
              <Route path={links.signIn} />
              <Route path={links.signUp} />
            </ErrorBoundary>
            <Redirect to={links.home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
export default App;
