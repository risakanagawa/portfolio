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
              <a className="theme-1st" href="https://github.com/risakanagawa">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a className="theme-1st" href="https://www.instagram.com/kngw/?hl=en">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a className="theme-1st" href="www.linkedin.com/in/risa-kangawa-080a0611a">
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
