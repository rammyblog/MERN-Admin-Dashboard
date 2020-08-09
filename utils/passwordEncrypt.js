const bcrypt = require('bcryptjs');

async function passwordEncrypt(rawPassword) {
  try {
    const SALT = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(rawPassword, SALT);
    return encryptedPassword;
  } catch (error) {
    throw error;
  }
}

module.exports = passwordEncrypt;
