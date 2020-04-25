var express = require('express');
var router = express.Router();
const controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',text: "text" });
});

router.post('/tasks', controllers.createTask);

module.exports = router;
