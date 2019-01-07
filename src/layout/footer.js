export default class Footer extends React.Component {

  render() {
    return (
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
            © 2018 Risa. All Rights Reserved
          </p>
        </div>
      </footer>
  );
}
}
