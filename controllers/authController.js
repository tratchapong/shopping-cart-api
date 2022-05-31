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