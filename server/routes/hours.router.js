const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/weekly/:id', (req, res) => {
  const userId = req.user.id
  queryText = `SELECT to_char(date_trunc('week', date ), 'MM/DD') AS "dates" , SUM (time_paid::INT)::VARCHAR "timePaid"
  FROM jobs WHERE "user_id" = $1
  GROUP BY "dates"
  ORDER BY "dates" DESC
  LIMIT 5;`
  queryValue = [userId]
  pool.query (queryText, queryValue)
  .then(result => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting weekly hours', error);
    res.sendStatus(500);
    })
  })


router.get('/daily/:id', (req, res) => {
  const userId = req.user.id
  queryText = `SELECT to_Char(date_trunc('day', date ), 'MM/DD') AS "dailyhours", 
  SUM(time_paid::INT)::VARCHAR"timePaid" 
  FROM jobs WHERE "user_id" = $1
  GROUP BY dailyhours
  ORDER BY dailyhours DESC 
  LIMIT 5;`
  queryValue = [userId]
  pool.query (queryText, queryValue)
  .then(result => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting daily hours', error);
    res.sendStatus(500);
    })
  })

router.get('/monthly/:id', (req, res) => {
  const userId = req.user.id;
  queryText = `SELECT to_Char(date_trunc('month', date ), 'MM/DD') AS "monthlydates", 
  SUM(time_paid::INT)::VARCHAR "timePaid"
  FROM jobs WHERE "user_id" = $1
  GROUP BY monthlydates
  ORDER BY monthlydates DESC 
  LIMIT 6;`; 
  queryValue = [userId];
  pool.query (queryText, queryValue)
  .then(result => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting monthly hours', error);
    res.sendStatus(500);
    })
  })

module.exports = router;
