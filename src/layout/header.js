export default class Header extends React.Component {

  render() {
    return (
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
                    About Me
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
  );
}
}
