const crypto = require('crypto');
const Token = require('../models/Token');

module.exports = async function (savedUser) {
  try {
    // Generate and send token
    const token = await crypto.randomBytes(20).toString('hex');
    const userToken = new Token({ _userId: savedUser._id, token: token });
    await userToken.save();
    return userToken;
  } catch (error) {
    throw error;
  }
};

// // Generate and send token
// const token = await randomTokenGen()
// const userToken = new Token({ _userId: savedUser._id, token: token })
// await userToken.save()
