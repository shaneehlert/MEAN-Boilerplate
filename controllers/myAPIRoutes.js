var express = require('express');
var MyModel = require('../models/myModel');
var router = express.Router();

// Base line url pattern = /api

router.route('/')
.get(function(req, res) {
  res.send('http://api.population.io:80/1.0/population');
});

module.exports = router;