const express = require('express');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});


router.post('/post', (req, res) => {
console.log(req.body) 

    // description: 'Description',
    // notes: 'Notes',
    // ref_ro_num: '123456',
    // time_paid: '1',
    // time_actual: '.1'

const userId = req.user.id;
const queryText = `INSERT INTO "jobs" (description, notes, ref_ro_num, time_paid, time_actual, user_id, date)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
pool
    .query(queryText, [req.body.description, req.body.notes, req.body.ref_ro_num,
        req.body.time_paid, req.body.time_actual, userId, req.body.date])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Sending Job Failed', err);
      res.sendStatus(500);
    });
});




module.exports = router;
