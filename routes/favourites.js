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
        console.log('FAVE ITEMS LIST');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;

};


// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };

//--GET ALL FAVES--// in user.js file move

// router.get("/:id/favourites", (req, res) => {
//   let query = `
//   SELECT items.*
//   FROM items
//   JOIN favourites ON item_id = items.id
//   JOIN users ON owner_id = users.id
//   WHERE user_id = 1
//   ORDER BY items.date_posted, items.title;`;

//   db.query(query)
//     .then(data => {
//       const items = data.rows;
//       res.send({ items });
//       console.log('FAVE ITEMS LIST');
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
