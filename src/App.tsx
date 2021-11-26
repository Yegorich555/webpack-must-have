import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import links from "./constants/constants";
import Layout from "./components/layout/layout";

const App = function () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={links.home} component={Home} />
          <Route exact path={links.product} component={Product} />
          <Route exact path={links.about} component={About} />
          <Route path={links.signIn} />
          <Route path={links.signUp} />
          <Redirect to={links.home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
