const express = require('express');
const router = express.Router();
const User = require('../models/User');  


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const user = new User({ first_name, last_name, email });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { first_name, last_name, email }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted', deletedUser });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
