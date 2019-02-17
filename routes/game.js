var express = require('express');
var router = express.Router();

/* GET game states. */
router.get('/start', function(req, res, next) {
  res.send('game is started');
});

router.get('/end', function(req, res, next) {
  res.send('game over');
});

module.exports = router;
