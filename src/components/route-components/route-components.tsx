import { Route } from "react-router-dom";
import About from "../links-components/about/about";
import Home from "../links-components/home/home";
import Products from "../links-components/products/products";
import Signin from "../links-components/sign-in/sign-in";
import Signup from "../links-components/sign-up/sign-up";

const Routecomponents = (): JSX.Element => (
  <div className="nav-components">
    <Route exact path="/home" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
    <Route path="/sign-in" component={Signin} />
    <Route path="/sign-up" component={Signup} />
    <Route path="*" component={Home} />
  </div>
);

export default Routecomponents;
