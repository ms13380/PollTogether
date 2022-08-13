const router = require('express').Router();
const { Poll, User, Answer } = require('../models');

router.get('/', async (req, res) => {
    try {
      const pollData = await Poll.findAll({
          attributes: ['id', 'poll_title', 'poll_desc', 'poll_options', 'user_id', 'created_at'],
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
          order: [['created_at', 'DESC']]
      });
  
      let polls = pollData.map((post) =>
        post.get({ plain: true })
      );

      // const session_user_id = req.session.user_id;
      // const data = {session_user_id, polls};
      res.render('homepage', {polls, logged_in: req.session.loggedIn, session_user_id: req.session_user_id});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/poll/:id', async (req, res) => {
  try {
    const pollData = await Poll.findByPk(req.params.id, {
      attributes: ['id', 'poll_title', 'poll_desc', 'poll_options', 'user_id', 'created_at'],
      include: [
        {
          model: Answer,
          where: { poll_id: req.params.id},
          attributes: ['poll_id', 'user_id', 'option'],
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ]
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    let poll = pollData.get({ plain: true });
    poll.poll_options = JSON.parse(poll.poll_options);
    poll.poll_options = poll.poll_options.options.map((o) => JSON.parse(`{"name": "${o}","count": 0}`));
    for (let i = 0; i < poll.answers.length; i++) {
      poll.poll_options.find(e => e.name === poll.answers[i].option).count++;
    }
    res.render('poll', {poll, logged_in: req.session.loggedIn, session_user_id: req.session_user_id})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;