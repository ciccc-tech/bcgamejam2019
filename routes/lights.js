var express = require('express');
var router = express.Router();

/* SET lights on */
router.get('/on', function(req, res, next) {
  res.send('light is on');
});

/* SET lights off */
router.get('/off', function(req, res, next) {
  res.send('light is off');
});

module.exports = router;
