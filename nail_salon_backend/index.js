const express = require('express');
const bodyParser = require('body-parser');
const squareRoutes = require('./routes/squareRoutes');
const services = require('./routes/services'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use('/api/square', squareRoutes);
app.use('/api/services', services);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
