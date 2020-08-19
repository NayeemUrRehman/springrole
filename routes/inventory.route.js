const router = require('express').Router();
const inventoryController = require('../controllers/inventory.controller')
router.get('/',inventoryController.test)
module.exports = router;
