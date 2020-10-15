// const UserModel = require('../Models/UserModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const crypto = require('crypto');

/**
 * GET /api/users
 * Get All Users
 */
exports.fetch = function (req, res) {
  res.json({ success: true, users: "works" });
};
