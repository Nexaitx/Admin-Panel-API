const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/home.controller');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home route
 *     description: Returns a static homepage
 *     responses:
 *       200:
 *         description: Returns index.html
 */
router.get('/', getHome);

module.exports = router;
