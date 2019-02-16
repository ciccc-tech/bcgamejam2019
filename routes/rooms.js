var express = require('express');
var router = express.Router();

/* GET room states. */
router.get('/empty', function(req, res, next) {
  res.send('nobody is on room');
});

router.get('/occupied', function(req, res, next) {
  res.send('there is someone on room');
});

module.exports = router;
