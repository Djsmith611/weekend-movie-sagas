const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

/**
 * GET genre names for actively displayed movie
 * Utilizes junction table to reference the movies and genres tables.
 * Sends genre names related to actively displayed movie
 */
router.get("/:id", (req, res) => {
  const sqlText = `
        SELECT "g"."name" -- selecting relevant genre names
        FROM "genres" AS "g" -- using an alias
        JOIN "movies_genres" AS "mg" ON "g"."id" = "mg"."genre_id" -- joining junction table
        WHERE "mg"."movie_id" = $1; -- only where actively displayed movie is
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
