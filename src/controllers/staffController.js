const Staff = require('../models/staffModel');

const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.getAllStaffs();
    res.json(staffs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getStaffs };
