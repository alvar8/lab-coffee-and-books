const mongoose = require('mongoose');
const Product = require('../models/place');
mongoose.connect('mongodb://localhost/awesome-project');

const places = [
  {
    place: "Santi Coffe", coordinates: [40.2332,78.415006]
  },
  {
    place: "Book store2", coordinates: [‎40.2450, 3.4133]
  },
  {
    place: "Book store3", coordinates: [‎40.2450, 3.4133]
  }
];
