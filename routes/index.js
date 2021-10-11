var express = require('express');
var router = express.Router();
const samples = require('../models/samples');

/* GET home page. */
router.get('/', async function (req, res, next) {
  samples
    .find()
    .exec()
    .then((data) => {
      res.render('index', { title: 'Jeyanth' });
    });

});

module.exports = router;
