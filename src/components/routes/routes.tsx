import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Routecomponents from "../routeComponents/routeComponents";

const Routes = (): JSX.Element => {
  const [loggedUser, setLoggedUser] = useState(false);

  const checkIfAuth = () => {
    setLoggedUser(true);
  };
  return (
    <BrowserRouter>
      <Header checkIfAuth={checkIfAuth} />
      <Routecomponents loggedUser={loggedUser} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
