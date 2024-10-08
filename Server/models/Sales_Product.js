const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:{
    type: Number,
  },
  title: {
   type: String,
  },
  price:{
    type: Number, 
  },
  description: {
    type: String,
  },
  category: {
    type : String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: Number,
    count: Number
  },
  dateOfSale: {
    type: Date
  },
  sold: {
    type: Boolean
  }, // Field to indicate if the product is sold
});

// 1st method of exporting the module
// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

// 2nd method of exporting the module
module.exports = mongoose.model('Product', productSchema);


