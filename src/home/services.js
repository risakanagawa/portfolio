import React from 'react';
import { connect } from "react-redux";


class WhatIlove extends React.Component {

  render() {
    const items = this.props.favorites.map((skill, key) =>
    <div key={key} className="col-12 col-sm-6 col-md-4">
      <div className="feature-box theme-1st-bg text-center m-t-15px m-b-15px">
        <i className={'icon color-white font-50 ' + skill.icon} />
        <div className="feature-content">
          <h5 className="font-w-700 font-25 color-white">
            {skill.skill}
          </h5>
          <p className="color-white">
            {skill.text}
          </p>
        </div>
      </div>
    </div>
        );

    return (

          <section id="services" className="section theme-2nd-bg">
              <div className="container">
                <div className="heading cl p-b-60px text-center">
                  <h4 className="theme-1st">
                    <span className="white-bg opacity9" />What I learn & love
                  </h4>
                </div>

                <div className="row">
                {items}
                </div>
              <a
                href="#portfolio"
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

const mapStateToProps = state => {
  console.log(state);
  return { favorites: state.favorites.favorite };
};

export default connect(
  mapStateToProps
)(WhatIlove);