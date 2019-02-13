import React from 'react';

import Header from "../layout/header";
import Footer from "../layout/footer";
import Navigation from "./navBar";
import Banner from "./banner";
import AboutMe from "./aboutMe";
import WhatIlove from "./services";
import Portfolio from "./portfolio";
import Contact from "./contact";

("use strict");

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div id="loading">
          <div className="load-circle">
            <span className="one" />
          </div>
        </div>
        <Header />
        <Navigation />

        <main>
          <Banner />
          <AboutMe />
          <WhatIlove />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    );
  }
}
