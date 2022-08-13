const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const userPageRoutes = require('./user-page-routes.js');

// router.use('/user-page', userPageRoutes);
// router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;