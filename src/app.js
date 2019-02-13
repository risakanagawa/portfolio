import HomePage from "./home/homePage";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

("use strict");

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

let domContainer = document.querySelector("#main");
ReactDOM.render(<App />, domContainer);
