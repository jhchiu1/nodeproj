var express = require('express');
var exchangeRates = require('../model/currencyDB');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET convert page. */
router.get('/convert', function(req, res, next) {
    var query = req.query;
    console.log(exchangeRates);

    var dollars = req.query.dollars;
    var toCurrency = req.query.to_currency;

    var converted = dollars * exchangeRates[toCurrency];

    res.render('results', {
        dollars: dollars,
        toCurrency: toCurrency,
        converted: converted});
});


/* GET about page. */
router.get('/about', function(req, res, next){
  res.render('about', {name: "my awesome site"});
});

module.exports = router;
