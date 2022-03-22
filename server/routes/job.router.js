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

router.get('/:id', (req, res) => {
    //   res.send(req.user);
    //   console.log(req.user)
    const jobId = req.params.id
      let userId = req.user.id
      queryText = `SELECT * FROM "jobs" WHERE "user_id" = $1 AND "id" = $2`;
      queryValue = [userId, jobId]
      pool.query(queryText, queryValue).then(result => res.send(result.rows))
      .catch(err => {
        console.log('ERROR in GET', err);
        res.sendStatus(500);
      }); 
    
    });
router.delete('/delete/:id', (req, res) => {
  console.log(req.params)
    pool.query(`DELETE FROM "jobs" WHERE "id"=$1`, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error deleting', error);
        res.sendStatus(500);
        })
    });
    
    router.put('/:id', (req, res) => {
      // Update this single job 
      const userId = req.user.id;
      console.log(req.user.id)
      console.log(req.body)
      const queryText = `UPDATE "jobs" SET description = $1, notes = $2, ref_ro_num = $3, 
      time_paid = $4, time_actual = $5 
      WHERE id = $6`;
      pool
          .query(queryText, [req.body.description, req.body.notes, req.body.ref_ro_num,
              req.body.time_paid, req.body.time_actual, req.body.id ])
          .then((result) => {
              res.sendStatus(200);
          })
          .catch((error) => {
              console.log(`Error making database update query`, error);
              res.sendStatus(500);
          });
  });

module.exports = router;
