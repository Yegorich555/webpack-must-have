import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import Routecomponents from "../routeComponents/routeComponents";
import { store } from "../store/reducers/store";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routecomponents />
    </Provider>
    <Footer />
  </BrowserRouter>
);

export default Routes;
