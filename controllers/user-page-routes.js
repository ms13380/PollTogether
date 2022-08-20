const router = require('express').Router();
const { Poll, User, Answer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
      const pollData = await Poll.findAll({
          attributes: ['id', 'poll_title', 'poll_desc', 'poll_options', 'user_id', 'created_at'],
          where:{
            user_id: req.params.id
          },
          include: [
              {
                  model: Answer,
                  attributes: ['poll_id', 'user_id', 'option'],
                  include: [{
                      model: User,
                      attributes: ['username']
                  }]
              },
              {
                  model: User,
                  attributes: ['username']
              }
          ],
          order: [['created_at', 'DESC']],
      });
  
      let polls = pollData.map((post) =>
        post.get({ plain: true })
      );

      for(let poll of polls) {
        poll.poll_options = JSON.parse(poll.poll_options);
        poll.poll_options = poll.poll_options.options.map((o) => JSON.parse(`{"name": "${o}","count": 0}`));
        for (let i = 0; i < poll.answers.length; i++) {
          poll.poll_options.find(e => e.name === poll.answers[i].option).count++;
        }
      }

      const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'username']
      });

      res.render('user-page', {polls, loggedIn: req.session.loggedIn, user_name: user.username});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;