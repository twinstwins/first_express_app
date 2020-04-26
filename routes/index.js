var express = require('express');
var router = express.Router();
const controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',text: "text" });
});

router.get('/tasks', controllers.getAllTasks);
router.post('/tasks', controllers.createTask);
router.get('/tasks/:taskId', controllers.getTaskById);

module.exports = router;
