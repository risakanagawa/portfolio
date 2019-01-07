import Header from '../layout/header';
import Footer from '../layout/footer';
import Navigation from './navBar';
import Banner from './banner';
import AboutMe from './aboutMe';
import WhatIdo from './services';
import Portfolio from './portfolio';
import Contact from './contact';


"use strict";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Risa',
        skills: [
          {
            name: 'HTML',
            level: '80%',
          },
          {
            name: 'CSS',
            level: '70%',
          },
          {
            name: 'JavaScript',
            level: '70%',
          },
          {
            name: 'React.js',
            level: '70%',
          },
          {
            name: 'PHP',
            level: '70%',
          },
        ]
      }
    };
  }

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
          <WhatIdo />
          <Portfolio />
          <Contact />

        </main>

        <Footer />
      </div>
    );
  }
}
