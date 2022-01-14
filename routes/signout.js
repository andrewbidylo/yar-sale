const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//---SIGNOUT---//

  router.get('/', (req, res) => {
    req.session = null;
    res.redirect('/items');
  });

  return router;
};
