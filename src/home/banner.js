export default class Banner extends React.Component {

  render() {
    return (
      <section
        id="home"
        className="bg-no-repeat bg-cover bg-center-center bg-fixed"
        style={{
          backgroundImage: "#fff"
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="home-banner-text">
                <h1>Hello I'm Risa</h1>
                <h3>
                  A Professional 
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

  );
}
}
