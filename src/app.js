const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/home.routes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const adminRoutes = require('./routes/adminRoutes' );

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
