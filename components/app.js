"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      liked: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "loading" },
          React.createElement(
            "div",
            { className: "load-circle" },
            React.createElement("span", { className: "one" })
          )
        ),
        React.createElement(
          "header",
          null,
          React.createElement(
            "nav",
            { className: "navbar navbar-expand-md" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "a",
                { className: "navbar-brand", href: "#" },
                "RK",
                React.createElement("span", { className: "theme-bg" })
              ),
              React.createElement(
                "button",
                { className: "toggler-menu" },
                React.createElement("span", null),
                React.createElement("span", null),
                React.createElement("span", null)
              ),
              React.createElement(
                "div",
                { className: "collapse nav_menu navbar-collapse justify-content-center" },
                React.createElement(
                  "ul",
                  { className: "navbar-nav" },
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "nav-link active", href: "#home" },
                      "Home"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "nav-link", href: "#aboutme" },
                      "About"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "nav-link", href: "#services" },
                      "Services"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "nav-link", href: "#portfolio" },
                      "Portfolio"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "a",
                      { className: "nav-link", href: "#contact" },
                      "Contact"
                    )
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "left-fixed-menu" },
          React.createElement(
            "ul",
            { className: "navbar-nav" },
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link active", href: "#home" })
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link", href: "#aboutme" })
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link", href: "#services" })
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link", href: "#portfolio" })
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link", href: "#blog" })
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { className: "nav-link", href: "#contact" })
            )
          )
        ),
        React.createElement(
          "main",
          null,
          React.createElement(
            "section",
            {
              id: "home",
              className: "bg-no-repeat bg-cover bg-center-center bg-fixed",
              style: {
                backgroundImage: "url(static/img/1600x1000.jpg)"
              }
            },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "row full-screen align-items-center justify-content-center" },
                React.createElement(
                  "div",
                  { className: "col-12 text-center" },
                  React.createElement(
                    "div",
                    { className: "home-banner-text" },
                    React.createElement(
                      "h1",
                      null,
                      "Hello I'm Risa"
                    ),
                    React.createElement(
                      "h3",
                      null,
                      "A Professional Web",
                      React.createElement("span", { id: "type-it" })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "next-btn" },
                    React.createElement(
                      "a",
                      { href: "#aboutme" },
                      React.createElement("i", { className: "ti-angle-down" })
                    )
                  )
                )
              ),
              React.createElement(
                "a",
                {
                  href: "#aboutme",
                  "data-scroll": "smooth",
                  className: "mouse-icon hidden-sm"
                },
                React.createElement("span", { className: "wheel" })
              )
            )
          ),
          React.createElement(
            "section",
            { id: "aboutme", className: "theme-1st-bg section counter-box" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-12 col-md-6" },
                  React.createElement(
                    "div",
                    { className: "about-text" },
                    React.createElement(
                      "div",
                      { className: "heading color-white p-b-20px" },
                      React.createElement(
                        "h4",
                        null,
                        React.createElement("span", { className: "theme-2nd-bg opacity9" }),
                        "About Me"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "p-t-15px p-b-30px-md" },
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "about me"
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-md-6" },
                  React.createElement(
                    "div",
                    { className: "skills" },
                    React.createElement(
                      "div",
                      { className: "progress-lt" },
                      React.createElement(
                        "h6",
                        { className: "color-white" },
                        "Html"
                      ),
                      React.createElement(
                        "span",
                        { className: "color-white" },
                        "92%"
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", {
                          className: "progress-bar theme-2nd-bg",
                          role: "progressbar",
                          "aria-valuenow": "92",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "progress-lt" },
                      React.createElement(
                        "h6",
                        { className: "color-white" },
                        "Css"
                      ),
                      React.createElement(
                        "span",
                        { className: "color-white" },
                        "84%"
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", {
                          className: "progress-bar theme-2nd-bg",
                          role: "progressbar",
                          "aria-valuenow": "84",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "progress-lt" },
                      React.createElement(
                        "h6",
                        { className: "color-white" },
                        "JavaScript"
                      ),
                      React.createElement(
                        "span",
                        { className: "color-white" },
                        "88%"
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", {
                          className: "progress-bar theme-2nd-bg",
                          role: "progressbar",
                          "aria-valuenow": "88",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "progress-lt" },
                      React.createElement(
                        "h6",
                        { className: "color-white" },
                        "React.js"
                      ),
                      React.createElement(
                        "span",
                        { className: "color-white" },
                        "76%"
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", {
                          className: "progress-bar theme-2nd-bg",
                          role: "progressbar",
                          "aria-valuenow": "86",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "progress-lt" },
                      React.createElement(
                        "h6",
                        { className: "color-white" },
                        "PHP"
                      ),
                      React.createElement(
                        "span",
                        { className: "color-white" },
                        "66%"
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", {
                          className: "progress-bar theme-2nd-bg",
                          role: "progressbar",
                          "aria-valuenow": "86",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      )
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "p-20px p-t-40px p-b-40px theme-2nd-bg m-t-100px m-t-50px-md" },
                React.createElement(
                  "div",
                  { className: "row text-center" },
                  React.createElement(
                    "div",
                    { className: "col-6 col-sm-6 col-md-3 p-t-15px p-b-15px" },
                    React.createElement(
                      "div",
                      { className: "counter-col" },
                      React.createElement(
                        "div",
                        { className: "counter-data", "data-count": "375" },
                        React.createElement(
                          "div",
                          { className: "count font-50 theme-1st font-w-700" },
                          "375"
                        ),
                        React.createElement(
                          "h6",
                          { className: "theme-1st" },
                          "Happy Clients"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 col-sm-6 col-md-3 p-t-15px p-b-15px" },
                    React.createElement(
                      "div",
                      { className: "counter-col" },
                      React.createElement(
                        "div",
                        { className: "counter-data", "data-count": "375" },
                        React.createElement(
                          "div",
                          { className: "count font-50 theme-1st font-w-700" },
                          "375"
                        ),
                        React.createElement(
                          "h6",
                          { className: "theme-1st" },
                          "Telephonic Talk"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 col-sm-6 col-md-3 p-t-15px p-b-15px" },
                    React.createElement(
                      "div",
                      { className: "counter-col" },
                      React.createElement(
                        "div",
                        { className: "counter-data", "data-count": "550" },
                        React.createElement(
                          "div",
                          { className: "count font-50 theme-1st font-w-700" },
                          "550"
                        ),
                        React.createElement(
                          "h6",
                          { className: "theme-1st" },
                          "Photo Capture"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 col-sm-6 col-md-3 p-t-15px p-b-15px" },
                    React.createElement(
                      "div",
                      { className: "counter-col" },
                      React.createElement(
                        "div",
                        { className: "counter-data", "data-count": "450" },
                        React.createElement(
                          "div",
                          { className: "count font-50 theme-1st font-w-700" },
                          "450"
                        ),
                        React.createElement(
                          "h6",
                          { className: "theme-1st" },
                          "Beer"
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "a",
              {
                href: "#services",
                "data-scroll": "smooth",
                className: "mouse-icon hidden-sm"
              },
              React.createElement("span", { className: "wheel" })
            )
          ),
          React.createElement(
            "section",
            { id: "services", className: "section theme-2nd-bg" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "heading cl p-b-60px text-center" },
                React.createElement(
                  "h4",
                  { className: "theme-1st" },
                  React.createElement("span", { className: "white-bg opacity9" }),
                  "What I can do"
                )
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-server color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "Development"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-ruler-pencil color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "Graphic"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-layout color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "Web Design"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-camera color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "Photography"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-palette color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "UX Design"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-sm-6 col-md-4" },
                  React.createElement(
                    "div",
                    { className: "feature-box theme-1st-bg text-center m-t-15px m-b-15px" },
                    React.createElement("i", { className: "icon ti-mobile color-white font-50" }),
                    React.createElement(
                      "div",
                      { className: "feature-content" },
                      React.createElement(
                        "h5",
                        { className: "font-w-700 font-25 color-white" },
                        "Mobile Apps"
                      ),
                      React.createElement(
                        "p",
                        { className: "color-white" },
                        "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy."
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "a",
              {
                href: "#portfolio",
                "data-scroll": "smooth",
                className: "mouse-icon hidden-sm"
              },
              React.createElement("span", { className: "wheel" })
            )
          ),
          React.createElement(
            "section",
            { id: "portfolio", className: "section theme-1st-bg" },
            React.createElement(
              "div",
              { className: "container text-center" },
              React.createElement(
                "div",
                { className: "heading cl p-b-60px text-center" },
                React.createElement(
                  "h4",
                  { className: "color-white" },
                  React.createElement("span", { className: "theme-2nd-bg opacity9" }),
                  "Portfolio"
                )
              ),
              React.createElement(
                "div",
                { className: "portfolio-filter m-b-45px" },
                React.createElement(
                  "ul",
                  { className: "filter text-center" },
                  React.createElement(
                    "li",
                    { className: "active", "data-filter": "*" },
                    "All"
                  ),
                  React.createElement(
                    "li",
                    { "data-filter": ".illustration" },
                    "Illustration"
                  ),
                  React.createElement(
                    "li",
                    { "data-filter": ".photoshop" },
                    "Photoshop"
                  ),
                  React.createElement(
                    "li",
                    { "data-filter": ".website" },
                    "Website"
                  ),
                  React.createElement(
                    "li",
                    { "data-filter": ".apps" },
                    "Apps"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "portfolio-content" },
                React.createElement(
                  "ul",
                  { className: "portfolio-cols portfolio-cols-3" },
                  React.createElement(
                    "li",
                    { className: "portfolio-item illustration" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { className: "portfolio-item photoshop" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { className: "portfolio-item website" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { className: "portfolio-item apps" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { className: "portfolio-item illustration" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "li",
                    { className: "portfolio-item photoshop" },
                    React.createElement(
                      "div",
                      { className: "portfolio-col portfolio-hover-01" },
                      React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("img", { src: "static/img/550x500.jpg", title: "", alt: "" })
                      ),
                      React.createElement(
                        "div",
                        { className: "hover text-center theme-2nd-bg" },
                        React.createElement(
                          "p",
                          { className: "font-w-700 theme-1st" },
                          "Illustration Work"
                        ),
                        React.createElement(
                          "label",
                          { className: "theme-1st" },
                          "illustration"
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "a",
              {
                href: "#contact",
                "data-scroll": "smooth",
                className: "mouse-icon hidden-sm"
              },
              React.createElement("span", { className: "wheel" })
            )
          ),
          React.createElement(
            "section",
            { id: "contact", className: "section theme-2nd-bg" },
            React.createElement(
              "div",
              { className: "container" },
              React.createElement(
                "div",
                { className: "heading cl p-b-60px text-center" },
                React.createElement(
                  "h4",
                  { className: "color-white" },
                  React.createElement("span", { className: "theme-2nd-bg opacity9" }),
                  "Contact Me"
                )
              ),
              React.createElement(
                "div",
                { className: "row text-center" },
                React.createElement(
                  "div",
                  { className: "col-12 col-md-4 m-t-15px m-b-15px" },
                  React.createElement(
                    "h5",
                    { className: "font-16 font-w-700 color-white" },
                    "My Location"
                  ),
                  React.createElement(
                    "div",
                    { className: "color-white font-14 opacity8" },
                    "301 The Greenhouse, Courtten",
                    React.createElement("br", null),
                    "London, E2 8DY."
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-md-4 m-t-15px m-b-15px" },
                  React.createElement(
                    "h5",
                    { className: "font-16 font-w-700 color-white " },
                    "My Email"
                  ),
                  React.createElement(
                    "div",
                    { className: "color-white font-14 opacity8" },
                    "infor@yourdomain.com",
                    React.createElement("br", null),
                    "support@yourdomain.com"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-12 col-md-4 m-t-15px m-b-15px" },
                  React.createElement(
                    "h5",
                    { className: "font-16 font-w-700 color-white" },
                    "My Numbers"
                  ),
                  React.createElement(
                    "div",
                    { className: "color-white font-14 opacity8" },
                    "+01 (989) 000 5665",
                    React.createElement("br", null),
                    "+01 (989) 000 5665"
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "footer",
          { className: "footer black-bg" },
          React.createElement(
            "a",
            { className: "back-top theme-2nd-bg", href: "#home" },
            React.createElement("i", { className: "ti-arrow-up" })
          ),
          React.createElement(
            "div",
            { className: "container text-center" },
            React.createElement(
              "ul",
              { className: "social-icons" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "theme-1st", href: "#" },
                  React.createElement("i", { className: "fa fa-facebook" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "theme-1st", href: "#" },
                  React.createElement("i", { className: "fa fa-twitter" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "theme-1st", href: "#" },
                  React.createElement("i", { className: "fa fa-google-plus" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "theme-1st", href: "#" },
                  React.createElement("i", { className: "fa fa-linkedin" }),
                  React.createElement("span", null)
                )
              )
            ),
            React.createElement(
              "p",
              { className: "copyright color-white" },
              "\xA9 2018 Morgan. All Rights Reserved"
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#main");
ReactDOM.render(React.createElement(App, null), domContainer);