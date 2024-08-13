const jwt = require('jsonwebtoken');
const secret = "vivek$123$";

function setUser(user) {
  
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret,
  );
}

function getUser(token) {
  if (!token) return null;

  try {
    // Verify JWT
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
