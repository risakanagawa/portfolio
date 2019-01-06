'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
                    <i className="icon ti-mobile color-white font-50"></i>
                    <div className="feature-content">
                        <h5 className="font-w-700 font-25 color-white">Mobile Apps</h5>
                        <p className="color-white">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#main');
ReactDOM.render(<App />, domContainer);