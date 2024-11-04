const {Client, Environment} = require('square');
require('dotenv').config();

const client = new Client({
    environment: Environment.Sandbox, // change to production for live
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
});


//Retrieve services (catalog or item list)
exports.getServices = async (req, res) => {
    try{
        const response = await client.catalogApi.listCatalog(undefined, 'ITEM');
        res.json(response.result.objects); // Adjust based on Square's response structure
    } catch (error) {
        console.error('Error retrieving serices:', error);
        res.status(500).send('Failed to retrieve services');
    }
}

//Process a payment
exports.processPayment = async (req, res) => {
    const { sourceId, amount, reservationDetails } = req.body;
  
    try {
      const response = await client.paymentsApi.createPayment({
        sourceId,
        amountMoney: {
          amount, // Amount in cents (e.g., 1000 = $10.00)
          currency: 'USD',
        },
        idempotencyKey: new Date().getTime().toString(),
      });
      res.json({success: true, payment: response.result, reservationDetails});
    } catch (error) {
      console.error('Payment processing error:', error);
      res.status(500).json({ success: false, message: "Payment failed", error });
    }
  };