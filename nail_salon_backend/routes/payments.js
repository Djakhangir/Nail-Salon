const express = require("express");
const router = express.Router();
const squareClient = require("../config/squareClient");

router.post("/create-payment", async (req, res) => {
  const { sourceId, amount } = req.body;
  try {
    const response = await squareClient.paymentsApi.createPayment({
      sourceId,
      amountMoney: { amount, currency: "USD" },
    });
    res.json({ success: true, payment: response.result.payment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
