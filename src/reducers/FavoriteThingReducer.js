const initialState = {
    favorite: [
        {
          skill: 'Development',
          icon: 'ti-server',
          text: 'I love cool technologies to create web pages and application. Thirsty to learn more about React, Redux and more JS flameworks.'
        },
        {
          skill: 'Web Design',
          icon: 'ti-layout',
          text: 'Browsing and creating beautiful websites are exciting. Always find new stractures, color palettes, combinations of typography.'
        },
        {
          skill: 'UX desgin',
          icon: 'ti-palette',
          text: 'We must think about user communications through our Website or App. To build it smoothly, we all need to know what makes them think and try not to make them think to use our service.'
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
          text: 'I love cooking. Knowing new culture always comes with new recipes. I really love exploring grocery stores when I travel or live in new places to see how the local live. '
        },
  ]
      }


export default (state = initialState, action) => {
        return state;
}