const { Poll } = require('../models');

const pollData = [
  {
    id: 'F49K0S',
    poll_title: 'Fist of Five',
    poll_desc: "How do you feel about the content covered in class today?",
    poll_options: `{"options": ["1", "2", "3", "4", "5"]}`,
    user_id: 1
  },
  {
    id: '97CQAB',
    poll_title: 'Best Coast',
    poll_desc: "",
    poll_options: `{"options": ["East Coast", "Central (No Coast)", "West Coast"]}`,
    user_id: 2,
    poll_expire: "2022-08-20 9:30:00"
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
    user_id: 4,
    poll_expire: "2022-08-30 22:37:00"
  },
  {
    id: '43R09Z',
    poll_title: 'Favorite Lang',
    poll_desc: "What is your favorite programming language? Poll closes on the 22nd.",
    poll_options: `{"options": ["Python", "Javascript", "Java", "C#", "C", "C++", "Go", "R", "Swift", "PHP"]}`,
    user_id: 5,
    poll_expire: "2022-08-22 00:00:00"
  },
  {
    id: 'Y6RFY1',
    poll_title: 'Favorite Color Of M&M',
    poll_desc: `And what it says about you.
Red: You are bold, adventurous, and energetic.
Orange: You are creative, social, and happy.
Yellow: You are optimistic, cheerful, and calming.
Blue: You are gentle, trustworthy, and stable.
Green: You are practical, helpful, and productive.
Brown: You are wrong.
`,
    poll_options: `{"options": ["Red", "Orange", "Yellow", "Blue", "Green", "Brown"]}`,
    user_id: 14
  },

];

const seedPolls = () => Poll.bulkCreate(pollData);

module.exports = seedPolls;
