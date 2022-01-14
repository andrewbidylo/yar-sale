const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//--Login--//

  router.get('/:id', (req, res) => {
    const userType = req.params.id === 1 ? 'buyer' : 'seller';
    req.session.user_id = req.params.id;
    req.session.user_type = userType;
    res.redirect('/items');
  });
  return router;
};
