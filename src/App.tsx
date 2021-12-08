import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import { links } from "./constants/constants";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Profile from "@/pages/profile/profile";
import PrivateRoute from "./components/privateRoute/privateRoute";
import { Context } from "./constants/context";

const App: React.FunctionComponent = function () {
  const [modalActive, setModalActive] = useState<boolean>(true);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("Name");

  const changeState = () => {
    setAuthorized(true);
    setModalActive(false);
  };

  useEffect(() => {
    localStorage.clear();
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <Context.Provider
      value={{ changeState, modalActive, setModalActive, authorized, setAuthorized, userName, setUserName }}
    >
      <Router>
        <Layout>
          <Switch>
            <ErrorBoundary>
              <Route exact path={links.home} component={() => <Home />} />
              <PrivateRoute path={links.profile} component={() => <Profile />} auth={authorized} />
              <PrivateRoute path={links.products} component={() => <Product />} auth={authorized} />
              <PrivateRoute path={`${links.products}/:platform`} component={() => <Product />} auth={authorized} />
              <PrivateRoute path={links.about} component={() => <About />} auth={authorized} />
            </ErrorBoundary>
          </Switch>
        </Layout>
      </Router>
    </Context.Provider>
  );
};
export default App;
