import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import imgSmall from "images/testSmall.png"; // start-path is 'images' because we have an alias 'images' in webpack.common.js
import imgCamera from "images/camera.svg";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import style from "./styles/main.module.css";
import someTypeScript from "./someTypeScript";

import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import bethesda from "images/bethesda-softworks.svg";
import valve from "images/valve.svg";
import blizzard from "images/blizzard-entertainment.svg";

//components
// import Header from "./components/header";
import Products from "./components/products";
import About from "./components/about";
import ErrorBoundary from "./components/ErrorBoundary";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  iMadeError: boolean;
  title: string;
}

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#85837e",
});

const StyledFooter = styled(AppBar)({
  position: "absolute",
  top: "auto",
  bottom: "0",
  backgroundColor: "#85837e", // #676b68 on hover #b83567 on border
});

const StyledNavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

// const StyledLink = styled(NavLink)({
//   textDecoration: "none",
//   color: "white",
//   fontWeight: "bold",
//   fontSize: "1.25rem",
//   height: "64px",
//   borderBottom: "3px solid transparent",
//   display: "flex",
//   alignContent: "center",
//   padding: "20px",
// });

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  height: "64px",
  borderBottom: "3px solid transparent",
  display: "flex",
  alignContent: "center",
  padding: "20px",
  "&:hover": { transition: "0.5s", borderBottom: "3px solid #b83567", backgroundColor: "#676b68" },
  "&:focus": { transition: "0.5s", borderBottom: "3px solid #b83567" },
  "&:active": { transition: "0.5s", borderBottom: "3px solid #b83567" },
});

const StyledFooterTypo = styled(Typography)({
  display: "block",
  justifySelf: "center",
});

const StyledA = styled("a")({
  textDecoration: "none",
  color: "white",
  padding: "15px",
});

const StyledImg = styled("img")({
  height: "24px",
  width: "auto",
});

const StyledNavDiv = styled("div")({
  margin: "0 auto",
});

const links = {
  home: "/",
  products: "/products",
  about: "/about",
};

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      iMadeError: true,
      title: someTypeScript("Test-block for css-modules"),
    };
    // test class-dead-code
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <StyledAppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" component="h1">
                Best Games Market
              </Typography>
              <StyledNavDiv></StyledNavDiv>
              <StyledLink to={links.home}>Home</StyledLink>

              <StyledLink to={links.products}>Products</StyledLink>
              <StyledLink to={links.about}>About</StyledLink>
            </Toolbar>
          </StyledAppBar>
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />

          <Route path={links.products} exact>
            <ErrorBoundary>
              <Products iMadeError={this.state.iMadeError} />
            </ErrorBoundary>
          </Route>

          <ErrorBoundary>
            <Route path={links.about} exact>
              <About />
            </Route>
          </ErrorBoundary>
          <Route path={links.home} exact>
            <div className="test-block">
              <h2 className={style.mainTitle}>{this.state.title}</h2>
            </div>
            <div className={["test-block", style.background].join(" ")}>
              <h2>Test-block for url-loader</h2>
              <img src={imgSmall} alt="smallImage" />
            </div>
            {/*  or it can be
          <img src='/src/images/testSmall.png' alt="smallImage"></img>
            */}
            <div className={["test-block", style.svgBackground].join(" ")}>
              <h2>Test-block for svg-url-loader</h2>
              <img src={imgCamera} alt="small_SVG_Image" />
            </div>
          </Route>
          <StyledFooter position="sticky">
            <StyledNavToolbar>
              <StyledFooterTypo variant="h6">Incredible convenient</StyledFooterTypo>
              <StyledA href="https://www.blizzard.com/en-us/" target="_blank">
                <StyledImg src={blizzard} alt="blizzard" />
              </StyledA>
              <StyledA href="https://bethesda.net/ru/dashboard" target="_blank">
                <StyledImg src={bethesda} alt="bethesda" />
              </StyledA>
              <StyledA href="https://www.valvesoftware.com/en/" target="_blank">
                <StyledImg src={valve} alt="valve" />
              </StyledA>
            </StyledNavToolbar>
          </StyledFooter>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
