const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      qty: Number,
      image: String
    }
  ],
  total: {
    type: Number,
    required: true
  },
  delivery: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Processing', 'On the way', 'Delivered', 'Cancelled'],
    default: 'Processing'
  },
  address: {
    street: String,
    city: String,
    country: String,
    zip: String
  },
  paymentId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);