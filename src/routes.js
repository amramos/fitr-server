var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

var user = require('./api/user');
var exercise = require('./api/exercise');


module.exports = function(app){
  app.use('/user', user);
  //  app.use('/exercise', exercise);
    /*
    app.post('/user/items', function(req, res) {
        Item.find({'user': req.body.user}, function(err, todos) {
            if (err)
                res.send(err)

            res.json(todos);
        });
    });

    app.post('/user/stocks', function(req, res) {
        Stock.find({'user': req.body.user}, function(err, stocks) {
            if (err)
                res.send(err)

            res.json(stocks);
        });
    });

    app.post('/user/edit/item', function(req, res) {

      Item.findByIdAndUpdate(req.body.id,
        {
          $set: {
            desc: req.body.desc,
            value: req.body.value,
            type: req.body.type
          }
      }, function(err, todo) {
        // get and return all the todos after you create another
        Item.find({'user': req.body.user}, function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
      });

    });

    app.post('/user/add/stock', function(req, res) {
        Stock.create({
            user: req.body.user,
            code : req.body.code,
            quantity: req.body.quantity,
            buyValue: req.body.buyValue,
            buyDate: new Date()
        }, function(err, stock) {
            if (err)
                res.send(err);

            Stock.find({'user': req.body.user}, function(err, stocks) {
                if (err)
                    res.send(err)
                res.json(stocks);
            });
        });

    });

    app.post('/user/add/item', function(req, res) {
        Item.create({
            user: req.body.user,
            desc : req.body.desc,
            value: req.body.value,
            type: req.body.type
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Item.find({'user': req.body.user}, function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/user/delete/item/:item_id', function(req, res) {
        Item.remove({
            _id : req.params.item_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Item.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });


  app.post('/user/status', function(req, res){
    console.log(req.body.user, 'oi');
    Item.aggregate([
          { $match: {
              user: mongoose.Types.ObjectId(req.body.user)
          }},
          { $group: {
              _id: null,
              balance: { $sum: "$value"  }
          }}
      ], function(err, result){
      console.log(err, result);
      res.json(result);
    });
  });

  app.get('/user/logout', function(req, res) {
    req.logout();
    res.status(200).json({status: 'Bye!'})
  });*/

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
