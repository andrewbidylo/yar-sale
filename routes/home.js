const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  //---REDIRECT TO ITEMS PAGE---//

  router.get("/",(req,res) => {
    res.redirect('items');
  });

  return router;
};
