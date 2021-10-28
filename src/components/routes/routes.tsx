import { BrowserRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Routecomponents from "../route-components/route-components";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routecomponents />
    <Footer />
  </BrowserRouter>
);

export default Routes;
