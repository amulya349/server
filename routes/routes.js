var express = require('express');
// var passport = require('passport');
// var Puc = require('../models/puc');
var Product = require('../models/product');
// var Purchase = require('../models/purchase');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
    // res.status(200).send("The server is running. Thanks for stopping by... :)");
    // res.render('index.html')
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/insertdata', function(req, res){
    var data = req.body;
    var x = new Product();
    x.name = "Laptop";
    x.ordid = req.body.Orderid;
    x.lat = req.body.Latitude;
    x.long = req.body.Longitude;
    x.timestamp = req.body.Timestamp;
    x.save(function(){
    	res.send(200);
    })
    console.log(data);
})

router.get('/getdata', function(req, res){
	Product.find(function(err, orders) {
        if (err)
            res.send(err);

        res.json(orders);
    })
})

router.get('/getlastlocation/:orderid', function(req, res){
    Product.find({'ordid': req.params.orderid}).sort({'_id': -1}).limit(1).exec(function(err, orders) {
        if (err)
            res.send(err);

        res.json(orders);
    })
})

module.exports = router;