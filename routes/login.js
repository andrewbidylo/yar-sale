const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//--Login--//

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    const userType = req.params.id === 1 ? 'buyer' : 'seller';
    req.session.user_id = req.params.id;
    req.session.user_type = userType;
    console.log(id)
    res.redirect('/items');
  });
  return router;
};
