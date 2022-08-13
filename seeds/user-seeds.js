const { User } = require('../models');

const userData = [
  {
    username: 'Lilly_Brooks',
    email: 'lilly.b@example.com',
    password: 'test.pass1'
  },
  {
    username: 'Nico_Cannon',
    email: 'nico.c@example.com',
    password: 'test.pass2'
  },
  {
    username: 'Dane_Larsen',
    email: 'dane.l@example.com',
    password: 'test.pass3'
  },
  {
    username: 'Madelyn_Tucker',
    email: 'madelyn.t@example.com',
    password: 'test.pass4'
  },
  {
    username: 'David_Graves',
    email: 'david.g@example.com',
    password: 'test.pass5'
  },
  {
    username: 'Noel_Park',
    email: 'noel.p@example.com',
    password: 'test.pass6'
  },
  {
    username: 'Samathna_McMillan',
    email: 'samantha.m@example.com',
    password: 'test.pass7'
  },
  {
    username: 'Devon_Burnett',
    email: 'devon.b@example.com',
    password: 'test.pass8'
  },
  {
    username: 'Jaeden_Rubio',
    email: 'jaeden.r@example.com',
    password: 'test.pass9'
  },
  {
    username: 'Joey_Mueller',
    email: 'joey.m@example.com',
    password: 'test.pass10'
  },
  {
    username: 'Ruth_Conley',
    email: 'ruth.c@example.com',
    password: 'test.pass11'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
