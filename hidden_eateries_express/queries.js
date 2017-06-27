var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

var connectionString = 'postgres://localhost:5432/food_db';
var db = pgp(process.env.DATABASE_URL || connectionString);

//-------------Boroughs---------------

function getAllBoro(req, res, next) { // Read function to display all boroughs as JSON
    console.log('all boroughs');
    db.any('SELECT * FROM boroughs')  
    .then(function(data){
      res.status(200)
        .json({
          data: data
        })
    });
}

//------------Restaurant List---------------

function createRest(req, res, next) { // Create function to insert new restaurant into database
  console.log(req.body);
  req.body.age = parseInt(req.body.age);
  db.none('INSERT INTO restaurant(name, address, cuisine, image, borough_id)' + 'VALUES(${name}, ${address}, ${cuisine}, ${image}, ${borough_id})',
    req.body).then(res.redirect('/')).catch(function (err) {
      return next(err);
    });
}

function getAllRest(req, res, next) { // Read function to display all restaurants as JSON
    console.log('all restaurants');
    db.any('SELECT * FROM restaurant')  
    .then(function(data){
      res.status(200)
        .json({
          data: data
        })
    });
}

function updateRest(req, res, next){ // Update function to edit restaurants from the database
    console.log('body:', req.body)
    db.none('UPDATE restaurant SET name=$1, address=$2, cuisine=$3, image=$4, borough_id=$5 WHERE idr = $6', 
        [req.body.name, req.body.address, req.body.cuisine, req.body.image, req.body.borough_id, parseInt(req.params.id)])
        .then(function(data){
            console.log('updated rest', data)
//            res.redirect('/' + req.params.id);
        });
};

function removeRest(req, res, next){ // Delete function to remove a restaurant from the database
    let restId = parseInt(req.params.id);
    db.result('DELETE FROM restaurant WHERE idr = $1', restId)
    .then(function() {
        next()
    })
    .catch(function (err) {
      return next(err);
    });
}

//-----------------Comments------------------

function createCmnt(req, res, next) { // Create function to insert new comments into database
  console.log(req.body);
  db.none('INSERT INTO comments(username, comment, restaurant_id)' + 'VALUES(${username}, ${comment}, ${restaurant_id})',
    req.body).then(res.redirect('/')).catch(function (err) {
      return next(err);
    });
}

function getAllCmnts(req, res, next) { // Read function to display all comments as JSON 
    console.log('all restaurants');
    db.any('SELECT * FROM comments')
        .then(function(data) {
        res.status(200)
        .json({
            data: data
        })  
    });
}

function updateCmnt(req, res, next){ // Update function to edit comments from the database
    console.log('body:', req.body)
    db.none('UPDATE comments SET username=$1, comment=$2 WHERE idc = $3', 
        [req.body.username, req.body.comment, parseInt(req.params.id)])
        .then(function(data){
            console.log('updated comments', data)
            res.redirect('/' + req.params.id);
        });
};

function removeCmnt(req, res, next){ // Delete function to remove a comment from the database
    let cmntId = parseInt(req.params.id);
    db.result('DELETE FROM comments WHERE idc = $1', cmntId)
    .then(function() {
        next()
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = { // exporting the functions to access them through routes
  getAllBoro: getAllBoro,
  createRest: createRest,
  getAllRest: getAllRest,
  updateRest: updateRest,
  removeRest: removeRest,
  createCmnt: createCmnt,
  getAllCmnts: getAllCmnts,
  updateCmnt: updateCmnt,
  removeCmnt: removeCmnt
};
