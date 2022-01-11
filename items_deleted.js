/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into api/items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  //--GET ALL ITEMS--//

  router.get("/", (req, res) => {
    let query = `
    SELECT *
    FROM items
    ORDER BY date_posted DESC, title;`;
    console.log(req.query);
    db.query(query)
      .then(data => {
        const items = data.rows;
        // res.send({ items });
        res.render('items', items);
        console.log('ITEMS');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // //--GET ONE ITEM--//

  router.get("/:id/:id", (req, res) => {
    const id = req.params.id
    let query = `
    SELECT *
    FROM items
    WHERE id = 1;`;
    console.log(req.params.id);
    db.query(query)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('1 ITEM');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //--GET ITEM BY PRICE--//

  // router.get("/", (req, res) => {
  //   let query = `
  //   SELECT *
  //   FROM items
  //   WHERE price BETWEEN 10 AND 100
  //   ORDER BY price, title;`;
  //   db.query(query)
  //     .then(data => {
  //       const items = data.rows;
  //       res.send({ items });
  //       console.log('GET ITEM BY PRICE');
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });


  // //--GET ALL FAVES--// in user.js file move

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

  //--ADD TO FAVES--// in favourites.js, pass favourite obj data into body: user_id & item_id

  router.post("/favourites", (req, res) => {
    let query = `
    INSERT INTO favourites(user_id, item_id)
    VALUES ($1, $2);`;

    db.query(query, queryParams)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('ADD NEW FAVE');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

//--DELETE FROM FAVES--// in favourites.js

  router.delete("/favourites/:id", (req, res) => {
    let query = `
    DELETE FROM favourites
    WHERE item_id = 5 AND user_id = 1;`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('REMOVE FAVE');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //--GET ADD NEW ITEM FORM--//

  router.get('/new') //user id passed through body
  //res.render form

  //--ADD NEW ITEM--//

  router.post("/new", (req, res) => {
    let query = `
    INSERT INTO items (owner_id, title, location, price, description, thumbnail_photo_url, date_posted) VALUES (2, 'CELL2', 'Toronto', 20000, 'message', 'https://i.imgur.com/96St5p8.jpeg', '2022-01-10');`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('ADD NEW FAVE - POST');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //--DELETE ITEM FROM LISTINGS--//

  //router.delete
  router.delete("/:id", (req, res) => {
    let query = `
    DELETE FROM items
    WHERE items.id = 12;`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.send({ items });
        console.log('DELETE ITEM FROM LISTINGS - POST');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //--RETURN ROUTER--//

  return router;
};

// $.ajax({
//   url: 'test.html',
//   type: 'DELETE',
//   data: {},  data from rec.body
//   success: function (result) {
//     // Do something with the result
//   }
// });
