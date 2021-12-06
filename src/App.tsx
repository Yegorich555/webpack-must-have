import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import { links } from "./constants/constants";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Profile from "@/pages/profile/profile";
import PrivateRoute from "./authenticated";

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
    window.history.replaceState({}, document.title)
  }, []);

  return (
    <Router>
      <Layout
        modalActive={modalActive}
        setModalActive={setModalActive}
        controllElements={changeState}
        authorized={authorized}
        setAuthorizedInfo={setAuthorized}
        userName={userName}
        setUserName={setUserName}
      >
        <Switch>
          <ErrorBoundary>
            <Route
              exact
              path={links.home}
              component={() => <Home modalActive={modalActive} userLoggedIn={changeState} setUserName={setUserName} />}
            />
            <PrivateRoute path={links.profile} component={() => <Profile />} auth={authorized} />
            <PrivateRoute path={links.products} component={() => <Product />} auth={authorized} />
            <PrivateRoute path={`${links.products}/:platform`} component={() => <Product />} auth={authorized} />
            <PrivateRoute path={links.about} component={() => <About />} auth={authorized} />
          </ErrorBoundary>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
