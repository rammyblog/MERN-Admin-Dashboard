const router = require('express').Router();
const { verifiedFunction: verify } = require('./verifyJwtToken');

router.get('/', verify, (req, res) => {
  res.json({ posts: { title: 'My first post', content: req.user } });
});

module.exports = router;
