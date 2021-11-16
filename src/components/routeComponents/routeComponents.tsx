import { Route } from "react-router-dom";
import About from "../linksComponents/about/about";
import Home from "../linksComponents/home/home";
import Signin from "../linksComponents/sign-in/sign-in";
import Signup from "../linksComponents/sign-up/sign-up";
import Pc from "../linksComponents/pc/pc";
import Products from "../linksComponents/products/products";
import Playstation from "../linksComponents/playstation/playstation";
import Xbox from "../linksComponents/xbox/xbox";

const Routecomponents = (): JSX.Element => (
  <div className="nav-components">
    <Route exact path="/home" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/pc" component={Pc} />
    <Route path="/playstation" component={Playstation} />
    <Route path="/xbox" component={Xbox} />
    <Route path="/about" component={About} />
    <Route path="/sign-in" component={Signin} />
    <Route path="/sign-up" component={Signup} />
    {/* <Route path="*" component={Home} /> */}
  </div>
);

export default Routecomponents;
