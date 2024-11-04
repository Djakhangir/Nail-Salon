const express = require("express");
const router = express.Router();
const { getServices, processPayment } = require('../controllers/controller'); 

router.get('/', getServices);
router.post('/process-payment', processPayment); 


module.exports = router;