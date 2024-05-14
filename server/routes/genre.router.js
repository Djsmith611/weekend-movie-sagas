const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

/**
 * GET all from genres table.
 * sends rows from "genres" to client.
 */
router.get('/', (req, res) => {
  const sqlText = `
    SELECT * FROM "genres";
  `;
  pool
    .query(sqlText)
    .then((result) => {
      res.status(200).send(result.rows)
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500)
    });
});

module.exports = router;