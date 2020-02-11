var express = require('express');
var router = express.Router();
const Authors = require('../public/models/Authors');
const Article = require('../public/models/Article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new', (req, res, next) => {
  const {name, compilation, year, authors} = req.body;
  console.log(authors)
  Article.create({name, compilation, year,authors}).then(Article => {
    res.json(Article);
  })
});


router.post('/newAuthors', (req, res, next) => {
  const {name, description} = req.body;
  Authors.create({name, description}).then(Authors => {
    res.json(Authors);
  })
});

router.get('/aaa',(req, res, next) => {
  Article.findAll({include:[{model: Authors, as: 'authors', foreignKey: 'Article_Id'}]}).then(result => {
    res.json(result);
  }).catch(error => {
    console.error(error);
    res.status(500);
    res.json({ error: 'Db error' });
  })
});

module.exports = router;
