var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
const data = require('../mock/data.json')

router.get('/goods', function (req, res) {
  res.send({
    code: 0,
    data: data.goods
  })
})

router.get('/ratings', function (req, res) {
  res.send({
    code: 0,
    data: data.ratings
  })
})

router.get('/info', function (req, res) {
  res.send({
    code: 0,
    data: data.info
  })
})
module.exports = router;
