// Create web server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

// GET ALL COMMENTS
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// GET SINGLE COMMENT BY ID
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// SAVE COMMENT
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// UPDATE COMMENT
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

// DELETE COMMENT
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});

module.exports = router;