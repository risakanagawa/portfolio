const initialState = {
    user: {
        name: "Risa",
        skills: [
          {
            name: "HTML",
            level: "90"
          },
          {
            name: "CSS",
            level: "85"
          },
          {
            name: "JavaScript",
            level: "80"
          },
          {
            name: "React.js",
            level: "80"
          },
          {
            name: "PHP",
            level: "78"
          }
        ],
        others: [
          {
            number: "10",
            text: "Visited Country"
          },
          {
            number: "2",
            text: "Speak Languages"
          },
          {
            number: "7",
            text: "Musical instruments"
          },
          {
            number: "100",
            text: "Coffee"
          }
        ]
      }
}

export default (state = initialState, action) => {
        return state;
}