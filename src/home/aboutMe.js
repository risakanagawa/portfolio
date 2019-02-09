export default class AboutMe extends React.Component {
  render() {
    const techs = this.props.user.skills.map((skill, key) => (
      <div key={key} className="progress-lt">
        <h6 className="color-white">{skill.name}</h6>
        <span className="color-white">{skill.level}%</span>
        <div className="progress">
          <div
            className="progress-bar theme-2nd-bg"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    ));

    const hobbies = this.props.user.others.map((hobby, key) => (
      <div key={key} className="col-6 col-sm-6 col-md-3 p-t-15px p-b-15px">
        <div className="counter-col">
          <div className="counter-data" data-count="10">
            <div className="count font-50 theme-1st font-w-700">
              {hobby.number}
            </div>
            <h6 className="theme-1st">{hobby.text}</h6>
          </div>
        </div>
      </div>
    ));

    return (
      <section id="aboutme" className="theme-1st-bg section counter-box">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="about-text">
                <div className="heading color-white p-b-20px">
                  <h4>
                    <span className="theme-2nd-bg opacity9" />
                    About Me
                  </h4>
                </div>
                <div className="p-t-15px p-b-30px-md">
                  <p className="color-white">
                    A web developer who likes to learn and seek out new
                    challenges, is looking for a creative and highly-motivated
                    environment where I can passionally code all day long.
                    <br />
                    <br />I love combining things. Not only technical or
                    pratical skills, I believe that everything we've experienced
                    in our life can be mixed up and result in great outcome
                    together. I am really passionate about helping and building
                    things coming out from just an idea to make something
                    better. I code, sometimes design.
                  </p>
                  <p className="color-white">
                    HTML / CSS / Javascript / PHP / WordPress / jQuery / React /
                    Redux / PhotoShop / Sketch
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="skills">{techs}</div>
            </div>
          </div>

          <div className="p-20px p-t-40px p-b-40px theme-2nd-bg m-t-100px m-t-50px-md">
            <div className="row text-center">{hobbies}</div>
          </div>
        </div>
        <a
          href="#services"
          data-scroll="smooth"
          className="mouse-icon hidden-sm"
        >
          <span className="wheel" />
        </a>
      </section>
    );
  }
}
