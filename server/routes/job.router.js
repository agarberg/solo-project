const express = require('express');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/get', (req, res) => {
//   res.send(req.user);
//   console.log(req.user)
  let id = req.user.id
  queryText = `SELECT * FROM "jobs" WHERE "user_id" = $1 ORDER BY "date" ASC`;
  queryValue = [id]
  pool.query(queryText, queryValue).then(result => res.send(result.rows))
  .catch(err => {
    console.log('ERROR in GET', err);
    res.sendStatus(500);
  }); 

});

router.post('/post', (req, res) => {
console.log(req.body) 
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
