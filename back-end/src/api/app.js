require('express-async-errors');
const express = require('express');
const cors = require('cors');
const registerRoutes = require('../routes/RegisterRoutes');
const httpErrorMiddleware = require('../middlewares/error.middleware');
const LoginRoutes = require('../routes/Login.router');
const ProductRoutes = require('../routes/Products.router');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/images', express.static('public'));

app.use('/register', registerRoutes);
app.use('/login', LoginRoutes);
app.use('/customer', ProductRoutes);

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(httpErrorMiddleware);

module.exports = app;
