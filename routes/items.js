/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into api/items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {


router.post("/new", (req, res) => {
  // const params = req.query.params;
  const owner_id = req.session.user_id;
  const title = req.body.title;
  const location = req.body.location;
  const price = parseInt(req.body.price);
  const description = req.body.description;
  const thumbnail_photo_url = req.body.thumbnail_photo_url;


  let query = `
  INSERT INTO items (owner_id, title, location, price, description, thumbnail_photo_url, date_posted)
  VALUES (${owner_id}, '${title}', '${location}', ${price}, '${description}', '${thumbnail_photo_url}', CURRENT_DATE)`;
  db.query(query)
    .then(data => {
      res.redirect("/items");
      console.log('ADD NEW FAVE - POST');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get("/new",(req,res) => {
  const id = req.session.user_id;

  res.render('new_item', {id});
});

  //--GET ALL ITEMS--//

  router.get("/", (req, res) => {
    const queryParams = [];
    const { minimum_price, maximum_price } = req.query;

    let queryString = `
    SELECT *
    FROM items
    WHERE 1 = 1`

    if (minimum_price) {
      queryParams.push(parseInt(minimum_price));
      queryString += ` AND price >= $${queryParams.length}`;
    }

    if (maximum_price){
      queryParams.push(parseInt(maximum_price));
      queryString += ` AND price <= $${queryParams.length}`;
    }

  queryString += `ORDER BY date_posted DESC, title;`;

    db.query(queryString, queryParams)
      .then(data => {
        const id = req.session.user_id;
        const items = data.rows;

        res.render('index', { items, id});
        //res.send({ items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const id = parseInt(req.session.user_id);
    const itemId = parseInt(req.params.id);
    let query = `
    SELECT *
    FROM items
    JOIN users ON owner_id = users.id
    WHERE items.id = ${itemId}

    ;`;

    db.query(query)
      .then(data => {
        const items = data.rows[0];
        console.log(items)
        const email = data.rows[0].email;
        
        res.render('item_details', {items, itemId, id, email});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  router.post("/:id/sold", (req, res) => {
    // const params = req.query.params;
    const itemId = req.params.id;
    const owner_id = parseInt(req.session.user_id);
    let query = `
     UPDATE items
     SET date_sold = CURRENT_DATE
     WHERE items.id = ${itemId} AND owner_id = ${owner_id};`;

    db.query(query)
      .then(data => {
        res.redirect("/items");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });




  //--DELETE ITEM FROM LISTINGS--//

  //router.delete
  router.post("/:id/delete", (req, res) => {
    // const id = parseInt(req.session.user_id);
    const itemId = req.params.id;
    const owner_id = parseInt(req.session.user_id);
    console.log(itemId, owner_id);
    let query = `
    DELETE FROM items
    WHERE items.id = ${itemId};`;

    db.query(query)
      .then(data => {
        const items = data.rows;
        // res.send({ items });
        res.redirect("/items");
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

