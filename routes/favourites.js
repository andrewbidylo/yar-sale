/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    const id = req.session.user_id;
    let query = `
    SELECT items.*
    FROM items
    JOIN favourites ON item_id = items.id
    JOIN users ON owner_id = users.id
    WHERE user_id = ${id}
    ORDER BY items.date_posted, items.title;`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.render('favourites', { items, id });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.post("/:id", (req, res) => {
    const id = parseInt(req.session.user_id);
    const itemId = parseInt(req.params.id);

    let query = `
    INSERT INTO favourites(user_id, item_id)
    VALUES (${id}, ${itemId});`;

    db.query(query)
    .then(data => {
      res.redirect('/');
    })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};
