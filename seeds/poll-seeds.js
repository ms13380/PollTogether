const { Poll } = require('../models');

const pollData = [
  {
    id: 1,
    poll_title: 'Sample',
    poll_desc: "This is a sample poll.",
    poll_options: `"Option 1","Option 2","Option 3","Option 4"`,
    poll_userID: 1
  },
  {
    id: 2,
    poll_title: 'Favorite color',
    poll_desc: "What is you favorite color?",
    poll_options: `"Red","Green","Blue","Yellow","Orange","Purple"`,
    poll_userID: 2
  },
  {
    id: 3,
    poll_title: 'How old are you?',
    poll_desc: "",
    poll_options: `"<13","13-19","20-29","30-39","40-49","50-59","60-69","70+"`,
    poll_userID: 3
  }
];

const seedPolls = () => Poll.bulkCreate(pollData);

module.exports = seedPolls;
