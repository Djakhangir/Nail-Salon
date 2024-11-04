const { Client, Environment } = require("square");
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox, // or Environment.Production for live payments
});

const getSquareServices = async () => {
    try {
      const response = await squareClient.catalogApi.listCatalog();
      return response.result.objects
        .filter(item => item.type === 'ITEM') // Filter only items (services)
        .map(service => ({
          name: service.itemData.name,
          price: service.itemData.variations[0].itemVariationData.priceMoney.amount / 100, // Adjust for cents
        }));
    } catch (error) {
      console.error("Error fetching services from Square:", error);
      throw error;
    }
  };


module.exports = client;
