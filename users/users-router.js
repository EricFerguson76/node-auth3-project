const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(() => {
      res.status(401).json({ message: 'You shall not pass!' });
    });
});

module.exports = router;
