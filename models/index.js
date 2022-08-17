const User = require('./User');
const Poll = require('./Poll');
const Answer = require('./Answer');

//A user might have many polls but when deleted then his polls are deleted as well
User.hasMany(Poll, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//A user might have many answers but when deleted then his answers are deleted as well
User.hasMany(Answer, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
  
Poll.hasMany(Answer, {foreignKey: 'poll_id'});

Poll.belongsTo(User, {foreignKey: 'user_id'});

Answer.belongsTo(User, {foreignKey: 'user_id'});
  
Answer.belongsTo(Poll, {foreignKey: 'poll_id'});

module.exports = {User, Poll, Answer};