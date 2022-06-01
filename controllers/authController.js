const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError');

const genToken = payload =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username }
    });

    if (!user) {
      createError('invalid credential', 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      createError('invalid credential', 400);
    }

    const token = genToken({ id: user.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { username, password, confirmPassword, email } =
      req.body;

    if (!username) {
      createError('username is required', 400);
    }

    if (!password) {
      createError('password is required', 400);
    }

    if (password !== confirmPassword) {
      createError('password and confirm password did not match', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    const token = genToken({ id: user.id });
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
