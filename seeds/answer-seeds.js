const { Answer } = require('../models');

const pollData = [
  {
    poll_id: 1,
    user_id: 2,
    option: "Option 1"
  },
  {
    poll_id: 1,
    user_id: 3,
    option: "Option 1"
  },
  {
    poll_id: 1,
    user_id: 4,
    option: "Option 2"
  },
  {
    poll_id: 1,
    user_id: 5,
    option: "Option 4"
  },
  {
    poll_id: 1,
    user_id: 6,
    option: "Option 4"
  },
  {
    poll_id: 1,
    user_id: 7,
    option: "Option 3"
  },
  {
    poll_id: 1,
    user_id: 8,
    option: "Option 1"
  },
  {
    poll_id: 1,
    user_id: 9,
    option: "Option 2"
  },
  {
    poll_id: 1,
    user_id: 10,
    option: "Option 2"
  },
  {
    poll_id: 1,
    user_id: 11,
    option: "Option 1"
  },

  ////////////////////////

  {
    poll_id: 2,
    user_id: 1,
    option: "Blue"
  },
  {
    poll_id: 2,
    user_id: 3,
    option: "Purple"
  },
  {
    poll_id: 2,
    user_id: 5,
    option: "Red"
  },
  {
    poll_id: 2,
    user_id: 6,
    option: "Blue"
  },
  {
    poll_id: 2,
    user_id: 7,
    option: "Red"
  },
  {
    poll_id: 2,
    user_id: 10,
    option: "Green"
  },
  {
    poll_id: 2,
    user_id: 11,
    option: "Red"
  },

  ////////////////////////

  {
    poll_id: 3,
    user_id: 1,
    option: "20-29"
  },
  {
    poll_id: 3,
    user_id: 2,
    option: "50-59"
  },
  {
    poll_id: 3,
    user_id: 4,
    option: "40-49"
  },
  {
    poll_id: 3,
    user_id: 5,
    option: "40-49"
  },
  {
    poll_id: 3,
    user_id: 6,
    option: "13-19"
  },
  {
    poll_id: 3,
    user_id: 7,
    option: "20-29"
  },
  {
    poll_id: 3,
    user_id: 8,
    option: "<13"
  },
  {
    poll_id: 3,
    user_id: 9,
    option: "20-29"
  },
  {
    poll_id: 3,
    user_id: 10,
    option: "13-19"
  },
  {
    poll_id: 3,
    user_id: 11,
    option: "30-39"
  },
  
];

const seedAnswer = () => Answer.bulkCreate(pollData);

module.exports = seedAnswer;
