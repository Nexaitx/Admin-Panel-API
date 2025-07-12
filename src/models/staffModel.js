const db = require('../config/db');

const getAllStaffs = async () => {
  const [rows] = await db.query('SELECT * FROM staff');
  return rows;
};

module.exports = { getAllStaffs };
