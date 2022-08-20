const { Answer } = require('../models');

const pollData = [
  {
    poll_id: "F49K0S",
    user_id: 2,
    option: "1"
  },
  {
    poll_id: "F49K0S",
    user_id: 3,
    option: "2"
  },
  {
    poll_id: "F49K0S",
    user_id: 4,
    option: "2"
  },
  {
    poll_id: "F49K0S",
    user_id: 5,
    option: "3"
  },
  {
    poll_id: "F49K0S",
    user_id: 6,
    option: "3"
  },
  {
    poll_id: "F49K0S",
    user_id: 7,
    option: "4"
  },
  {
    poll_id: "F49K0S",
    user_id: 8,
    option: "4"
  },
  {
    poll_id: "F49K0S",
    user_id: 9,
    option: "4"
  },
  {
    poll_id: "F49K0S",
    user_id: 10,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 11,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 12,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 13,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 14,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 15,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 16,
    option: "5"
  },
  {
    poll_id: "F49K0S",
    user_id: 17,
    option: "5"
  },

  ////////////////////////

  {
    poll_id: "97CQAB",
    user_id: 1,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 2,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 3,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 4,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 5,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 6,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 7,
    option: "East Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 8,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 9,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 10,
    option: "Central (No Coast)"
  },
  {
    poll_id: "97CQAB",
    user_id: 11,
    option: "Central (No Coast)"
  },
  {
    poll_id: "97CQAB",
    user_id: 12,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 13,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 14,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 15,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 16,
    option: "West Coast"
  },
  {
    poll_id: "97CQAB",
    user_id: 17,
    option: "Central (No Coast)"
  },

  ////////////////////////

  {
    poll_id: "Z6Y5X4",
    user_id: 1,
    option: "20-29"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 2,
    option: "50-59"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 4,
    option: "40-49"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 5,
    option: "40-49"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 6,
    option: "13-19"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 7,
    option: "20-29"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 8,
    option: "<13"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 9,
    option: "20-29"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 10,
    option: "13-19"
  },
  {
    poll_id: "Z6Y5X4",
    user_id: 11,
    option: "30-39"
  },

  ////////////////////////////
  
  {
    poll_id: "T4JG51",
    user_id: 1,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 2,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 3,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 5,
    option: "No"
  },
  {
    poll_id: "T4JG51",
    user_id: 6,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 7,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 8,
    option: "No"
  },
  {
    poll_id: "T4JG51",
    user_id: 9,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 10,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 11,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 12,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 13,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 14,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 15,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 16,
    option: "Yes"
  },
  {
    poll_id: "T4JG51",
    user_id: 17,
    option: "No"
  },

  ////////////////////////////

  {
    poll_id: "43R09Z",
    user_id: 1,
    option: "Python"
  },
  {
    poll_id: "43R09Z",
    user_id: 2,
    option: "Javascript"
  },
  {
    poll_id: "43R09Z",
    user_id: 3,
    option: "Javascript"
  },
  {
    poll_id: "43R09Z",
    user_id: 4,
    option: "Javascript"
  },
  {
    poll_id: "43R09Z",
    user_id: 5,
    option: "Javascript"
  },
  {
    poll_id: "43R09Z",
    user_id: 6,
    option: "Javascript"
  },
  {
    poll_id: "43R09Z",
    user_id: 7,
    option: "Java"
  },
  {
    poll_id: "43R09Z",
    user_id: 8,
    option: "Java"
  },
  {
    poll_id: "43R09Z",
    user_id: 9,
    option: "C#"
  },
  {
    poll_id: "43R09Z",
    user_id: 10,
    option: "C#"
  },
  {
    poll_id: "43R09Z",
    user_id: 11,
    option: "Go"
  },
  {
    poll_id: "43R09Z",
    user_id: 12,
    option: "R"
  },
  {
    poll_id: "43R09Z",
    user_id: 13,
    option: "R"
  },
  {
    poll_id: "43R09Z",
    user_id: 14,
    option: "Swift"
  },
  {
    poll_id: "43R09Z",
    user_id: 15,
    option: "PHP"
  },
  {
    poll_id: "43R09Z",
    user_id: 16,
    option: "C"
  },
  {
    poll_id: "43R09Z",
    user_id: 17,
    option: "C++"
  },

  ////////////////////////////

  {
    poll_id: "Y6RFY1",
    user_id: 1,
    option: "Blue"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 2,
    option: "Red"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 3,
    option: "Red"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 4,
    option: "Red"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 5,
    option: "Red"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 6,
    option: "Red"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 7,
    option: "Orange"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 8,
    option: "Orange"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 9,
    option: "Yellow"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 10,
    option: "Blue"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 11,
    option: "Blue"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 12,
    option: "Blue"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 13,
    option: "Green"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 14,
    option: "Green"
  },
  {
    poll_id: "Y6RFY1",
    user_id: 15,
    option: "Brown"
  }
];

const seedAnswer = () => Answer.bulkCreate(pollData);

module.exports = seedAnswer;
