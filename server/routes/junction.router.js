const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const sqlText = `
        SELECT "genres"."name"
        FROM "genres"
        JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
        WHERE "movies_genres"."movie_id" = $1;
    `;
  pool
    .query(sqlText, [req.params.id])
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
