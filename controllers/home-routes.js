const router = require('express').Router();
const { Poll, User, Answer } = require('../models');

router.get('/', async (req, res) => {
    try {
      const pollData = await Poll.findAll({
          attributes: ['id', 'title', 'description', 'options', 'user_id', 'created_at'],
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
  
      const polls = pollData.map((post) =>
        post.get({ plain: true })
      );
      const session_user_id = req.session.user_id;
      const data = {session_user_id, polls};
      res.render('homepage', {data, loggedIn: req.session.loggedIn});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });