const express = require('express');
const view_routes = require('./routes/view_routes');
const api_routes = require('./routes/api_routes');
const PORT = process.env.PORT || 3333;
// const path = require('path');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

// Load Routes
app.use('/', [view_routes, api_routes]);

app.listen(PORT, () => console.log('Server started on port 3333.'));
