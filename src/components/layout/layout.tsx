import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout: React.FunctionComponent = function ({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
