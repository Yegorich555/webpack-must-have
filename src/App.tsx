import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import Footer from "./components/footer/footer";

const App = function () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/about" component={About} />
          <Route path="/signIn" />
          <Route path="/signUp" />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
