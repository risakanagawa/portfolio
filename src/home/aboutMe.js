export default class AboutMe extends React.Component {

  render() {
    return (

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

  );
}
}
