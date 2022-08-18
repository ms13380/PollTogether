
const router = require('express').Router();

const userRoutes = require('./user-routes');
const pollRoutes = require('./poll-routes');
const answerRoutes = require('./answer-routes');

router.use('/users', userRoutes);
router.use('/polls', pollRoutes);
router.use('/answers', answerRoutes);

module.exports = router;