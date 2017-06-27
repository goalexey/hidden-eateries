var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/boroughs', db.getAllBoro); // Made route to access the Read function for boroughs

//--------------------------------------

router.get('/', db.getAllRest); // Made route to access the Read function for restaurants

router.post('/', db.createRest); // Made route to access the Create function for restaurants

router.put('/:id', db.updateRest); // Made route to access the Update function for restaurants
  
router.delete('/:id', db.removeRest); // Made route to access the Delete function for restaurants

//---------------------------------------

router.post('/comments', db.createCmnt); // Made route to access the Create function for comments
           
router.get('/comments', db.getAllCmnts); // Made route to access the Read function for comments
           
router.put('/comments/:id', db.updateCmnt); // Made route to access the Update function for comments

router.delete('/comments/:id', db.removeCmnt); // Made route to access the Delete function for comments


module.exports = router;