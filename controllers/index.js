const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dashboard-routes.js')
const userPageRoutes = require('./user-page-routes.js');

router.use('/user', userPageRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);


module.exports = router;