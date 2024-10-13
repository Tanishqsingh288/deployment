const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add a new item
router.post('/', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

module.exports = router;
