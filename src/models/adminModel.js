const db = require('../config/db');

const createAdmin = async (name, email, hashedPassword) => {
  const [result] = await db.query(
    'INSERT INTO admin (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  return result.insertId;
};

const findAdminByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM admin WHERE email = ?', [email]);
  return rows[0];
};


const updatePassword = async (email, hashedPassword) => {
  const [result] = await db.query(
    'UPDATE admin SET password = ? WHERE email = ?',
    [hashedPassword, email]
  );
  return result.affectedRows > 0;
};

module.exports = { createAdmin, findAdminByEmail,updatePassword };
