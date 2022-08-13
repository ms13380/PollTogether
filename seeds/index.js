const seedUsers = require('./user-seeds');
const seedPolls = require('./poll-seeds');
const seedAnswers = require('./answer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPolls();
  console.log('\n----- POLLS SEEDED -----\n');

  await seedAnswers();
  console.log('\n----- ANSWERS SEEDED -----\n');


  process.exit(0);
};

seedAll();
