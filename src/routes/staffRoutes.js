const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

/**
 * @swagger
 * /api/staffs:
 *   get:
 *     summary: Get all staffs
 *     responses:
 *       200:
 *         description: A list of staffs
 */
router.get('/staffs', staffController.getStaffs);

module.exports = router;
