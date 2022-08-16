const { Poll } = require('../models');

const pollData = [
  {
    id: 'ABC123',
    poll_title: 'Sample',
    poll_desc: "This is a sample poll.",
    poll_options: `{"options": ["Option 1", "Option 2", "Option 3", "Option 4"]}`,
    user_id: 1
  },
  {
    id: '987CBA',
    poll_title: 'Favorite color',
    poll_desc: "What is you favorite color?",
    poll_options: `{"options": ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"]}`,
    user_id: 2
  },
  {
    id: 'Z6Y5X4',
    poll_title: 'How old are you?',
    poll_desc: "",
    poll_options: `{"options": ["<13", "13-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]}`,
    user_id: 3
  },
  {
    id: 'T4JG51',
    poll_title: 'Will the Braves win the World Series this year?',
    poll_desc: "",
    poll_options: `{"options": ["Yes", "No"]}`,
    user_id: 4
  }
];

const seedPolls = () => Poll.bulkCreate(pollData);

module.exports = seedPolls;
