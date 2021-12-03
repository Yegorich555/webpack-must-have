import { useContext } from "react";
import { Route } from "react-router-dom";
import About from "../linksComponents/about/about";
import Home from "../linksComponents/home/home";
import Products from "../linksComponents/products/products";
import ProtectedRoute from "../ProtectedRoute/protectedRoute";
import { UsersContext } from "../routes/provider";

const Routecomponents = (): JSX.Element => {
  const { loggedUser } = useContext(UsersContext);

  return (
    <div>
      <Route path="/home" render={() => <Home />} />
      <ProtectedRoute path="/products" loggedUser={loggedUser} component={Products} />
      <ProtectedRoute path="/about" loggedUser={loggedUser} component={About} />
      <Route path="/products" render={() => <Products />} />
      <Route path="/sign-in" render={() => <Home />} />
      <Route path="/sign-up" render={() => <Home />} />
    </div>
  );
};

export default Routecomponents;
