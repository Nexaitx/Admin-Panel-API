const db = require('../config/db');

const getAllStaffs = async () => {
  const [rows] = await db.query('SELECT * FROM staff');
  return rows;
};
const getStaffById = async (id) => {
  const [rows] = await db.query('SELECT * FROM staff WHERE id = ?', [id]);
  return rows[0];
};

const updateStaff = async (id, staffData) => {
  await db.query('UPDATE staff SET ? WHERE id = ?', [staffData, id]);
};

const deleteStaff = async (id) => {
  await db.query('DELETE FROM staff WHERE id = ?', [id]);
};

module.exports = { getAllStaffs, getStaffById, updateStaff, deleteStaff };
