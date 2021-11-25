import { Route, Switch } from "react-router-dom";
import About from "../linksComponents/about/about";
import Home from "../linksComponents/home/home";
import Products from "../linksComponents/products/products";

interface RouteProps {
  loggedUser: boolean;
}

const Routecomponents = ({ loggedUser }: RouteProps): JSX.Element => (
  <div>
    <Switch>
      <Route exact path="/home" component={Home} />
      {!loggedUser ? <Route path="/products" component={Home} /> : <Route path="/products" component={Products} />}
      {!loggedUser ? <Route path="/about" component={Home} /> : <Route path="/products" component={About} />}
      <Route path="/sign-in" component={Home} />
      <Route path="/sign-up" component={Home} />
    </Switch>
  </div>
);

export default Routecomponents;
