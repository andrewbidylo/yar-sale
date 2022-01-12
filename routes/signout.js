const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//--Login--//

  router.get('/', (req, res) => {
    req.session = null;
    res.redirect('/items');
  });
  return router;
};
