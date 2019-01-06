"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
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

        <header>
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <a className="navbar-brand" href="#">
                RK
                <span className="theme-bg" />
              </a>
              <button className="toggler-menu">
                <span />
                <span />
                <span />
              </button>
              <div className="collapse nav_menu navbar-collapse justify-content-center">
                <ul className="navbar-nav">
                  <li>
                    <a className="nav-link active" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#aboutme">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="left-fixed-menu">
          <ul className="navbar-nav">
            <li>
              <a className="nav-link active" href="#home" />
            </li>
            <li>
              <a className="nav-link" href="#aboutme" />
            </li>
            <li>
              <a className="nav-link" href="#services" />
            </li>
            <li>
              <a className="nav-link" href="#portfolio" />
            </li>
            <li>
              <a className="nav-link" href="#blog" />
            </li>
            <li>
              <a className="nav-link" href="#contact" />
            </li>
          </ul>
        </div>

        <main>
          <section
            id="home"
            className="bg-no-repeat bg-cover bg-center-center bg-fixed"
            style={{
              backgroundImage: "url(static/img/1600x1000.jpg)"
            }}
          >
            <div className="container">
              <div className="row full-screen align-items-center justify-content-center">
                <div className="col-12 text-center">
                  <div className="home-banner-text">
                    <h1>Hello I'm Risa</h1>
                    <h3>
                      A Professional Web
                      <span id="type-it" />
                    </h3>
                  </div>
                  <div className="next-btn">
                    <a href="#aboutme">
                      <i className="ti-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#aboutme"
                data-scroll="smooth"
                className="mouse-icon hidden-sm"
              >
                <span className="wheel" />
              </a>
            </div>
          </section>

          <section id="aboutme" className="theme-1st-bg section counter-box">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="about-text">
                    <div className="heading color-white p-b-20px">
                      <h4>
                        <span className="theme-2nd-bg opacity9" />About Me
                      </h4>
                    </div>
                    <div className="p-t-15px p-b-30px-md">
                      <p className="color-white">about me</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="skills">
                    <div className="progress-lt">
                      <h6 className="color-white">Html</h6>
                      <span className="color-white">92%</span>
                      <div className="progress">
                        <div
                          className="progress-bar theme-2nd-bg"
                          role="progressbar"
                          aria-valuenow="92"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <div className="progress-lt">
                      <h6 className="color-white">Css</h6>
                      <span className="color-white">84%</span>
                      <div className="progress">
                        <div
                          className="progress-bar theme-2nd-bg"
                          role="progressbar"
                          aria-valuenow="84"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <div className="progress-lt">
                      <h6 className="color-white">JavaScript</h6>
                      <span className="color-white">88%</span>
                      <div className="progress">
                        <div
                          className="progress-bar theme-2nd-bg"
                          role="progressbar"
                          aria-valuenow="88"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <div className="progress-lt">
                      <h6 className="color-white">React.js</h6>
                      <span className="color-white">76%</span>
                      <div className="progress">
                        <div
                          className="progress-bar theme-2nd-bg"
                          role="progressbar"
                          aria-valuenow="86"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                    <div className="progress-lt">
                      <h6 className="color-white">PHP</h6>
                      <span className="color-white">66%</span>
                      <div className="progress">
                        <div
                          className="progress-bar theme-2nd-bg"
                          role="progressbar"
                          aria-valuenow="86"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-20px p-t-40px p-b-40px theme-2nd-bg m-t-100px m-t-50px-md">
                <div className="row text-center">
                  <div className="col-6 col-sm-6 col-md-3 p-t-15px p-b-15px">
                    <div className="counter-col">
                      <div className="counter-data" data-count="375">
                        <div className="count font-50 theme-1st font-w-700">
                          375
                        </div>
                        <h6 className="theme-1st">Happy Clients</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 p-t-15px p-b-15px">
                    <div className="counter-col">
                      <div className="counter-data" data-count="375">
                        <div className="count font-50 theme-1st font-w-700">
                          375
                        </div>
                        <h6 className="theme-1st">Telephonic Talk</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 p-t-15px p-b-15px">
                    <div className="counter-col">
                      <div className="counter-data" data-count="550">
                        <div className="count font-50 theme-1st font-w-700">
                          550
                        </div>
                        <h6 className="theme-1st">Photo Capture</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 p-t-15px p-b-15px">
                    <div className="counter-col">
                      <div className="counter-data" data-count="450">
                        <div className="count font-50 theme-1st font-w-700">
                          450
                        </div>
                        <h6 className="theme-1st">Beer</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#services"
              data-scroll="smooth"
              className="mouse-icon hidden-sm"
            >
              <span className="wheel" />
            </a>
          </section>

          <section id="services" className="section theme-2nd-bg">
            <div className="container">
              <div className="heading cl p-b-60px text-center">
                <h4 className="theme-1st">
                  <span className="white-bg opacity9" />What I can do
                </h4>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-server color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        Development
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-ruler-pencil color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        Graphic
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-layout color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        Web Design
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-camera color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        Photography
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-palette color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        UX Design
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                  <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-mobile color-white font-50" />
                    <div className="feature-content">
                      <h5 className="font-w-700 font-25 color-white">
                        Mobile Apps
                      </h5>
                      <p className="color-white">
                        Lorem Ipsum is simply text of the printing and
                        typesetting industry. Lorem Ipsum has been standard
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#portfolio"
              data-scroll="smooth"
              className="mouse-icon hidden-sm"
            >
              <span className="wheel" />
            </a>
          </section>

          <section id="portfolio" className="section theme-1st-bg">
            <div className="container text-center">
              <div className="heading cl p-b-60px text-center">
                <h4 className="color-white">
                  <span className="theme-2nd-bg opacity9" />Portfolio
                </h4>
              </div>

              <div className="portfolio-filter m-b-45px">
                <ul className="filter text-center">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".illustration">Illustration</li>
                  <li data-filter=".photoshop">Photoshop</li>
                  <li data-filter=".website">Website</li>
                  <li data-filter=".apps">Apps</li>
                </ul>
              </div>

              <div className="portfolio-content">
                <ul className="portfolio-cols portfolio-cols-3">
                  <li className="portfolio-item illustration">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                  <li className="portfolio-item photoshop">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                  <li className="portfolio-item website">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                  <li className="portfolio-item apps">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                  <li className="portfolio-item illustration">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                  <li className="portfolio-item photoshop">
                    <div className="portfolio-col portfolio-hover-01">
                      <a href="#">
                        <img src="static/img/550x500.jpg" title="" alt="" />
                      </a>
                      <div className="hover text-center theme-2nd-bg">
                        <p className="font-w-700 theme-1st">
                          Illustration Work
                        </p>
                        <label className="theme-1st">illustration</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="#contact"
              data-scroll="smooth"
              className="mouse-icon hidden-sm"
            >
              <span className="wheel" />
            </a>
          </section>

          <section id="contact" className="section theme-2nd-bg">
            <div className="container">
              <div className="heading cl p-b-60px text-center">
                <h4 className="color-white">
                  <span className="theme-2nd-bg opacity9" />Contact Me
                </h4>
              </div>

              <div className="row text-center">
                <div className="col-12 col-md-4 m-t-15px m-b-15px">
                  <h5 className="font-16 font-w-700 color-white">
                    My Location
                  </h5>
                  <div className="color-white font-14 opacity8">
                    301 The Greenhouse, Courtten
                    <br />
                    London, E2 8DY.
                  </div>
                </div>

                <div className="col-12 col-md-4 m-t-15px m-b-15px">
                  <h5 className="font-16 font-w-700 color-white ">My Email</h5>
                  <div className="color-white font-14 opacity8">
                    infor@yourdomain.com
                    <br />
                    support@yourdomain.com
                  </div>
                </div>
                <div className="col-12 col-md-4 m-t-15px m-b-15px">
                  <h5 className="font-16 font-w-700 color-white">My Numbers</h5>
                  <div className="color-white font-14 opacity8">
                    +01 (989) 000 5665
                    <br />
                    +01 (989) 000 5665
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer black-bg">
          <a className="back-top theme-2nd-bg" href="#home">
            <i className="ti-arrow-up" />
          </a>
          <div className="container text-center">
            <ul className="social-icons">
              <li>
                <a className="theme-1st" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="theme-1st" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="theme-1st" href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a className="theme-1st" href="#">
                  <i className="fa fa-linkedin" />
                  <span />
                </a>
              </li>
            </ul>
            <p className="copyright color-white">
              © 2018 Morgan. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

let domContainer = document.querySelector("#main");
ReactDOM.render(<App />, domContainer);
