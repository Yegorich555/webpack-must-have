import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import { links } from "./constants/constants";
import Layout from "./components/layout/layout";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Signin from "./pages/signin/signin";

const App: React.FunctionComponent = function () {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("Name");
  const changeState = () => {
    setAuthorized(true);
    setModalActive(false);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Router>
      <Layout
        modalActive={modalActive}
        setModalActive={setModalActive}
        controllElements={changeState}
        authorized={authorized}
        setAuthorized={setAuthorized}
        userName={userName}
        setUserName={setUserName}
      >
        <Switch>
          <Route exact path={links.home} component={Home} />
          <ErrorBoundary>
            {authorized ? (
              <>
                <Route exact path={links.product} component={Product} />
                <Route exact path={`${links.product}/:value`} component={Product} />
                <Route exact path={links.about} component={About} />
              </>
            ) : (
              <>
                <div>At first you should login</div>
              <Signin active={true} setActive={setModalActive} userLoggedIn={changeState} setUserName={setUserName} />
              </>
            )}
          </ErrorBoundary>
          <Redirect to={links.home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
