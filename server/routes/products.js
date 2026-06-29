const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, sort } = req.query;
    let query = {};
    if (category && category !== 'all') query.category = category;
    let products = await Product.find(query);
    if (sort === 'low') products.sort((a,b) => a.price - b.price);
    if (sort === 'high') products.sort((a,b) => b.price - a.price);
    if (sort === 'rating') products.sort((a,b) => b.rating - a.rating);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;