const bcrypt = require('bcrypt');
const Auth = require('../models/adminModel');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingAdmin = await Auth.findAdminByEmail(email);
    if (existingAdmin) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const adminId = await Auth.createAdmin(name, email, hashedPassword);

    res.status(201).json({ message: 'Admin registered successfully', adminId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Auth.findAdminByEmail(email);
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // JWT can be returned here if needed
    res.status(200).json({ message: 'Login successful', admin: { id: admin.id, name: admin.name, email: admin.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const admin = await Auth.findAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updated = await Auth.updatePassword(email, hashedPassword);

    if (updated) {
      res.status(200).json({ message: 'Password reset successful' });
    } else {
      res.status(500).json({ message: 'Failed to update password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login, resetPassword };
