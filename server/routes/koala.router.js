const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET


// POST
// Post koala to the database from user inputs

router.post('/', (req, res) => {
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


// PUT


// DELETE

module.exports = koalaRouter;