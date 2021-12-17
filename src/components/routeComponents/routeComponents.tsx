import { Route, Switch } from "react-router-dom";
import About from "../linksComponents/about/about";
import Home from "../linksComponents/home/home";
import Products from "../linksComponents/products/products";
import ProfilePage from "../linksComponents/profilePage/profilePage";
import ProtectedRoute from "../ProtectedRoute/protectedRoute";

const Routecomponents = (): JSX.Element => (
  <div>
    <Switch>
      <ProtectedRoute path="/products" component={Products} />
      <ProtectedRoute path="/about" component={About} />
      <ProtectedRoute path="/profile" component={ProfilePage} />
      <Route path="/sign-in" render={() => <Home />} />
      <Route path="/sign-up" render={() => <Home />} />
      <Route path="/home" render={() => <Home />} />
    </Switch>
  </div>
);

export default Routecomponents;
