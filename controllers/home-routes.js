const router = require('express').Router();
const { Poll, User, Answer } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedOut) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

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
          order: [['created_at', 'DESC']],
          limit: 6
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

      res.render('homepage', {polls, loggedIn: req.session.loggedIn, session_user_id: req.session_user_id});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/poll/:id', async (req, res) => {
  try {
    const pollData = await Poll.findByPk(req.params.id, {
      attributes: ['id', 'poll_title', 'poll_desc', 'poll_options', 'user_id', 'poll_expire', 'created_at'],
      include: [
        {
          model: Answer,
          required: false,
          where: { poll_id: req.params.id },
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

    let userCanVote = false;
    if (req.session.loggedIn) {
      const expiration = poll.poll_expire ? new Date(new Date(poll.poll_expire).toUTCString()) : null;
      const today = new Date(new Date().toUTCString());
      if(expiration == null || expiration > today) {
        const voteExists = await Answer.findOne({
          where: {
            poll_id: poll.id,
            user_id: req.session.user_id
          }
        });
        if (voteExists == null) {
          userCanVote = true;
        }
      }
    }

    res.render('poll', {poll, loggedIn: req.session.loggedIn, userCanVote: userCanVote, session_user_id: req.session_user_id})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/create', async (req, res) => {
  try {
      res.render('create-poll', {loggedIn: req.session.loggedIn});
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;