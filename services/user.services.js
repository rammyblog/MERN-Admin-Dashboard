const User = require('../models/User');

const getUser = async (query) => {
  try {
    const user = await User.findOne(query).select('+password');
    if (!user || !user.isActive) {
      throw Error('User not found or not active');
    }

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getSingleUserService = async (query) => {
  try {
    const user = await User.findOne(query).select('+password');
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getUsers = async (query) => {
  try {
    const users = await await User.find(query);
    return users;
  } catch (err) {
    throw Error(err);
  }
};

const getActiveUsers = async (query) => {
  try {
    const user = await User.find(query);
    return user;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = { getUser, getUsers, getActiveUsers, getSingleUserService };
