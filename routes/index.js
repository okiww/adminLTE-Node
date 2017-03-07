var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/divisi', function(req, res,next) {
	res.render('dashboard/divisi');
})
module.exports = router;
