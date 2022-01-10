/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into api/items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    let query = `
    SELECT *
    FROM items
    ORDER BY date_posted DESC, title;`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('ITEMS');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
