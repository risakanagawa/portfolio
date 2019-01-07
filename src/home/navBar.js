export default class Navigation extends React.Component {
  render(){
    return (
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
    );
  }
}
