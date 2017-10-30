var express = require('express');
var exchangeRates = require('../model/currencyDB');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* GET about page. */
router.get('/about/', function(req, res, next){
    res.render('about', {name: "my awesome site"});
});

/* GET convert page. */
router.get('/convert', function(req, res, next) {

    var currency = req.query.dollars;
    var toCurrency = req.query.to_currency;
    var fromCurrency = req.query.from_currency;
    var crate;
    var tocurr;
    var fromcurr;

    if (fromCurrency === "USD" && toCurrency === "USD") {
        crate = "DTD";
        fromcurr = "USD";
        tocurr = "USD";
    } else
    if (fromCurrency === "USD" && toCurrency === "JPY") {
        crate = "DTY";
        fromcurr = "USD";
        tocurr = "JPY";
    } else
    if (fromCurrency === "USD" && toCurrency === "EUR") {
        crate = "DTE";
        fromcurr = "USD";
        tocurr = "EUR";
    } else
    if (fromCurrency === "EUR" && toCurrency === "USD") {
        crate = "ETD";
        fromcurr = "EUR";
        tocurr = "USD";
    } else
    if (fromCurrency === "EUR" && toCurrency === "JPY") {
        crate = "ETY";
        fromcurr = "EUR";
        tocurr = "JPY";
    } else
    if (fromCurrency === "EUR" && toCurrency === "EUR") {
        crate = "ETE";
        fromcurr = "EUR";
        tocurr = "EUR";
    } else
    if (fromCurrency === "JPY" && toCurrency === "USD") {
        crate = "YTD";
        fromcurr = "JPY";
        tocurr = "USD";
    } else
    if (fromCurrency === "JPY" && toCurrency === "JPY") {
        crate = "YTY";
        fromcurr = "JPY";
        tocurr = "JPY";
    } else
    if (fromCurrency === "JPY" && toCurrency === "EUR") {
        crate = "YTE";
        fromcurr = "JPY";
        tocurr = "EUR";
    }

    var converted = currency * exchangeRates[crate];

    for (item in exchangeRates) {
        console.log("item = " + item);
        console.log("exchangeRates[item] = " + exchangeRates[item])
    }
    res.render('results', {
        currency: currency,
        toCurrency: toCurrency,
        tocurr: tocurr,
        fromcurr: fromcurr,
        fromCurrency: fromCurrency,
        converted: converted});
});
module.exports = router;
