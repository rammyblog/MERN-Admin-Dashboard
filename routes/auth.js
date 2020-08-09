/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const ensureAuth = require('./verifyJwtToken');

const {
  registerUser,
  loginUser,
  verifyUserRegistration,
  resendVerificationToken,
  sendPasswordResetToken,
  passwordReset,
  changePassword,
  getAllUsers,
  getAllActiveUsers,
  getSingleUser
} = require('../controllers/authControllers');
const User = require('../models/User');
const ConvertIntToMonth = require('../helpers/ConvertIntToMonth');

router.get('/', getAllUsers);

router.get('/active', ensureAuth, getAllActiveUsers);
router.get('/:id', getSingleUser);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/verify', verifyUserRegistration);

router.post('/resend-verification-token', resendVerificationToken);

// Password reset token
router.post('/send-password-reset-token', sendPasswordResetToken);

// Password reset
router.post('/password-reset', passwordReset);

// User change password
router.post('/change-password', ensureAuth, changePassword);

router.get('/group/group-by-month', async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          // _id: '$_id',
          _id: { month: { $month: '$date' } },
          count: { $sum: 1 }
        }
      }
    ]);
    console.log(users);
    const response = users.map((user) => ({
      month: ConvertIntToMonth(user._id.month),
      count: user.count
    }));
    console.log(response);
    return res.json(response);
    // console.log(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
