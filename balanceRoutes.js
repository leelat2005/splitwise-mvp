const express = require('express');
const router = express.Router();
const controller = require('../controllers/balanceController');

router.get('/', controller.getBalances);

module.exports = router;