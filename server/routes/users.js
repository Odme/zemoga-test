/* eslint-disable consistent-return */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../db/models/User');

/* GET users listing. */
router.get('/', (req, res) => {
  User.find().then((users) => {
    res.status(200).json(users);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

/* GET user data. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findOne({ _id: id }).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

/* POST users signup. */
router.post('/signup', (req, res) => {
  const { user, pwd } = req.body;
  bcrypt.hash(pwd, 10).then((hash) => {
    const newUser = new User({
      user,
      pwd: hash,
    });
    newUser.save().then(() => {
      res.status(201).json({ message: 'User added successfully!' });
    }).catch((error) => {
      res.status(500).json({ error });
    });
  });
});

/* POST users login. */
router.post('/login', (req, res) => {
  const { user, pwd } = req.body;
  User.findOne({ user }).then((findUser) => {
    if (!findUser) {
      return res.status(401).json({ error: 'User not found!' });
    }
    const { _id: id, pwd: findPwd } = findUser;
    bcrypt.compare(pwd, findPwd).then((valid) => {
      if (!valid) {
        return res.status(401).json({ error: 'Incorrect password!' });
      }
      const token = jwt.sign(
        { userId: id },
        'THIS_IS_A_RANDOM_TOKEN',
        { expiresIn: '24h' },
      );
      res.status(200).json({ userId: id, token });
    }).catch((error) => {
      res.status(500).json({ error });
    });
  }).catch((error) => {
    res.status(500).json({ error });
  });
});

/* PUT users edit. */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { age, marriage } = req.body;
  const user = new User({
    _id: id,
    age,
    marriage,
  });
  User.updateOne({ _id: id }, user).then(() => {
    res.status(201).json({ message: 'Updated successfully!' });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

/* DELETE users delete. */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id }).then(() => {
    res.status(200).json({ message: 'Deleted!' });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = router;
