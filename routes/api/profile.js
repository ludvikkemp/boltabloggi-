const express = require('express');
const router = express.Router();

// @route   GET api/profile/test
// @descr   Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Profile Works' }));

module.exports = router;
