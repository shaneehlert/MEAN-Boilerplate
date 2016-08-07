var express = require('express');
var MyModel = require('../models/myModel');
var router = express.Router();

// Base line url pattern = /api

router.route('/')
.get(function(req, res) {
  res.send('Hit base API route');
});

module.exports = router;