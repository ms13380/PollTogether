const router = require('express').Router();
const { Answer, Poll } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
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