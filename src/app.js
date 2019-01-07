import HomePage from './home/homePage';

"use strict";

class App extends React.Component {
  render() {
    return (
      <HomePage />
    );
  }
}

let domContainer = document.querySelector("#main");
ReactDOM.render(<App />, domContainer);
