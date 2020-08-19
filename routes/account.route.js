const router = require('express').Router();
const accountController = require('../controllers/account.controller')
router.get('/',accountController.test)
module.exports = router;
