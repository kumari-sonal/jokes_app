const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Import the routes

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes); // Use the routes under '/api' prefix

// Listen on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));
