let skills = [
      {
        skill: 'Development',
        icon: 'ti-server',
        text: 'I love cool technologies to build web pages and application. Thirsty to learn more about React, Redux and more JS flameworks.'
      },
      {
        skill: 'Web Design',
        icon: 'ti-layout',
        text: 'Browsing and creating beautiful websites are exciting. Always find new stractures, color palettes, combinations of typography.'
      },
      {
        skill: 'UX desgin',
        icon: 'ti-palette',
        text: 'We must think about user communications through Website or App. To build it smoothly, we all need to know what makes them think and try not to make them think to use our service.'
      },
      {
        skill: 'Languages',
        icon: 'ti-comments-smiley',
        text: 'Before falling in love with computer languages, I have been into human languages. I am now learning Czech and German. Persuing languages is fun and my lifelong hobby.'
      },
      {
        skill: 'Illustration',
        icon: 'ti-ruler-pencil',
        text: 'Since when I was a little girl, I have used a pen tablet with Adobe Photoshop, SAI to draw illustlations. Learning to use Adobe Illustrator would be next step.'
      },
      {
        skill: 'Cooking',
        icon: 'ti-heart',
        text: 'I love cooking. Knowing new culture always comes with new recipes.I really love exploring grocery stores when I travel to see how the local live. '
      },
]


export default class WhatIlove extends React.Component {

  render() {
    const items = skills.map((skill, key) =>
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
