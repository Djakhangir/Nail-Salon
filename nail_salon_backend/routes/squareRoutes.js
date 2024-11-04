const express = require('express');
const { getServices, processPayment } = require('../controllers/controller');
const router = express.Router();

router.get('/services', getServices);
router.post('payment', processPayment);

module.exports = router;

