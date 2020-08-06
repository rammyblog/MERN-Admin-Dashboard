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
  getAllActiveUsers
} = require('../controllers/authControllers');

router.get('/', ensureAuth, getAllUsers);

router.get('/active', ensureAuth, getAllActiveUsers);

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

module.exports = router;
