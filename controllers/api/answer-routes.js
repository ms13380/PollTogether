const router = require('express').Router();
const { Answer, Poll } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const poll = await Poll.findByPk(req.body.poll_id, {
        });
        const expiration = poll.poll_expire ? new Date(new Date(poll.poll_expire).toUTCString()) : null;
        const today = new Date(new Date().toUTCString());
        if (expiration && expiration < today) {
            throw 'Poll expired.';
        }
        const data = await Answer.create({
            poll_id: req.body.poll_id,
            user_id: req.session.user_id,
            option: req.body.option
        });
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;