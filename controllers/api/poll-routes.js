const router = require('express').Router();
const { Poll } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const data = await Poll.create({
            id: req.body.poll_id,
            poll_title: req.body.poll_title,
            poll_desc: req.body.poll_desc,
            poll_options: req.body.poll_options,
            user_id: req.session.user_id,
            poll_expire: req.body.poll_expire
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const data = await Poll.update({
            poll_desc: req.body.poll_desc
        },
        {
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No post with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No post with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const pollData = await Poll.findByPk(req.params.id, {
        attributes: ['id'],
      });
      if (pollData) {
        res.status(200).json(pollData);
      } else {
        res.status(404).json(pollData);
      }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;