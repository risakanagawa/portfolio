export default class Portfolio extends React.Component {

  render() {
    return (

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
  );
}
}
