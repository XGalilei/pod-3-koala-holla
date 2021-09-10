const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET


// POST
// Post koala to the database from user inputs

koalaRouter.post('/', (req, res) => {
    const koalaToAdd = req.body;
    // test that is relayed to the database
    const queryText =  
    `INSERT INTO "koala" 
    ("name", "age", "gender", "ready_for_transfer", "notes")
    VALUES ($1, $2, $3, $4);`
    ;
    // values to add into query which are
    // received from post on the client and accessed by object attribute
    pool.query(queryText, [
        koalaToAdd.name,
        koalaToAdd.age,
        koalaToAdd.gender,
        koalaToAdd.ready_for_transfer,
        koalaToAdd.notes,
    ]).then(( result ) => {
        console.log('Success in posting to koala db!');
        res.sendStatus(200);
    }).catch( (error ) => {
        console.log('There was an error posting to koala db!');
        res.sendStatus(500);
    })
})

// Get for button call

koalaRouter.get('/', (req,res) => {
    console.log(req.body);
    const queryText =  'SELECT * FROM "koala";';
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(500);
    })
})

// PUT
/**
 * 
 *  
 */
koalaRouter.put('/:id', (req, res) => {
    console.log(req.params);
    const koalaId = req.params.id;
    const queryText = 'UPDATE "koala" SET "ready_for_transfer" WHERE "id" = $1;';
    pool.query(queryText, [koalaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error updating transfer', error);
        res.sendStatus(500);
    })
});


// DELETE

module.exports = koalaRouter;