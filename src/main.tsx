import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// import imgSmall from "images/testSmall.png"; // start-path is 'images' because we have an alias 'images' in webpack.common.js
// import imgCamera from "images/camera.svg";
import { Component, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import Footer from "./components/footer";
import routes from "./routeConfig";

// import style from "./styles/main.module.css";
// import someTypeScript from "./someTypeScript";

interface AppProps {
  nothing: boolean;
}

interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  // ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    // this.state = {
    //   title: someTypeScript("Test-block for css-modules"),
    // };
    // test class-dead-code
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work", props.nothing);
    }
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.products} element={<Products />} />
              <Route path={routes.about} element={<About />} />
              <Route path={routes.redirect} element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById("app")!).render(<AppContainer nothing={false} />);
