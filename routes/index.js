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

    var toCurrency = req.query.to_currency;
    var fromCurrency = req.query.from_currency;

    var converted = toCurrency * exchangeRates[toCurrency];

    res.render('results', {
        toCurrency: toCurrency,
        fromCurrency: fromCurrency,
        converted: converted});
});


/* GET about page. */
router.get('/about', function(req, res, next){
  res.render('about', {name: "my awesome site"});
});

module.exports = router;
