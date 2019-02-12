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
              <li data-filter=".website">Website</li>
              <li data-filter=".apps">Apps</li>
              <li data-filter=".illustration">Design</li>
            </ul>
          </div>

          <div className="portfolio-content">
            <ul className="portfolio-cols portfolio-cols-3">

            <li className="portfolio-item website">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/search-events">
                    <img src="static/img/works/meetup.png" title="" alt="meetup project" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Meetup Search App<br />
                      React.js, Redux.js
                    </p>
                    <label className="theme-1st">Website</label>
                  </div>
                </div>
              </li>
            <li className="portfolio-item website">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/Aloha">
                    <img src="static/img/works/aloha.png" title="" alt="aloha project" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Aloha shopping Website<br />
                      HTML CSS jQuery
                    </p>
                    <label className="theme-1st">Website</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item illustration">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="static/img/works/dailyUI01.gif" rel="lightbox">
                    <img src="static/img/works/dailyUI01.gif" title="" alt="" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Login Design
                    </p>
                    <label className="theme-1st">UI Work</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item illustration">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="static/img/works/dello.png" rel="lightbox">
                    <img src="static/img/works/dello.png"  />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Dello App
                    </p>
                    <label className="theme-1st">App Design</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item apps">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/Pong-game">
                    <img src="static/img/works/ponggame.png" title="" alt="" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Classic Pong Game
                    </p>
                    <label className="theme-1st">Javascript SVG</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item apps">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/instanewsApp">
                    <img src="static/img/works/instanews.png" title="" alt="" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Instanews App
                    </p>
                    <label className="theme-1st">Javascript,NY times API</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item website">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/inhabitent">
                    <img src="static/img/works/inhabitent.png" title="" alt="" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Inhabitent Website
                    </p>
                    <label className="theme-1st">Wordpress, PHP</label>
                  </div>
                </div>
              </li>
              <li className="portfolio-item apps">
                <div className="portfolio-col portfolio-hover-01">
                  <a href="https://github.com/risakanagawa/dev-quotes">
                    <img src="static/img/works/devquotes.png" title="dev quotes" alt="" />
                  </a>
                  <div className="hover text-center theme-2nd-bg">
                    <p className="font-w-700 theme-1st">
                      Quotes on Dev App
                    </p>
                    <label className="theme-1st">Wordpress, PHP, API</label>
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
