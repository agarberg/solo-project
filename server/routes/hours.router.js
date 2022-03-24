const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/weekly/:id', (req, res) => {
  const userId = req.user.id
  queryText = `SELECT date_trunc('week', date ) as start_of_week, SUM (time_paid) as weekly_hours
  FROM jobs WHERE "user_id" = $1
  GROUP BY date_trunc('week', date )
  ORDER BY date_trunc('week', date ) DESC 
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
  queryText = `SELECT date_trunc('day', date ) as day, SUM (time_paid) as daily_hours
  FROM jobs WHERE "user_id" = $1
  GROUP BY date_trunc('day', date )
  ORDER BY date_trunc('day', date ) DESC 
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
  const userId = req.user.id
  queryText = `SELECT date_trunc('month', date ) as start_of_month, SUM (time_paid) as monthly_hours
  FROM jobs WHERE "user_id" = $1
  GROUP BY date_trunc('month', date )
  ORDER BY date_trunc('month', date ) DESC 
  LIMIT 6;` 
  queryValue = [userId]
  pool.query (queryText, queryValue)
  .then(result => res.send(result.rows))
  .catch((error) => {
    console.log('Error getting monthly hours', error);
    res.sendStatus(500);
    })
  })

module.exports = router;
