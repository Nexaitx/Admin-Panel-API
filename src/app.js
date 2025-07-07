const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/home.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', homeRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
