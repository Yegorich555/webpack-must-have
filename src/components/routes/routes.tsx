import { BrowserRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Routecomponents from "../routeComponents/routeComponents";
import UsersContextProvider from "./provider";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <UsersContextProvider>
      <Header />
      <Routecomponents />
    </UsersContextProvider>
    <Footer />
  </BrowserRouter>
);

export default Routes;
