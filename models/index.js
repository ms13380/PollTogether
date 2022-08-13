const User = require('./User');
const Poll = require('./Poll');
const Answer = require('./Answer');

User.hasMany(Poll, {foreignKey: 'user_id'});

User.hasMany(Answer, {foreignKey: 'user_id'});
  
Poll.hasMany(Answer, {foreignKey: 'post_id'});

Poll.belongsTo(User, {foreignKey: 'user_id'});

Answer.belongsTo(User, {foreignKey: 'user_id'});
  
Answer.belongsTo(Poll, {foreignKey: 'post_id'});

module.exports = {User, Poll, Answer};