const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apirest', { 
useNewUrlParser: true,
useUnifiedTopology: true   });

mongoose.Promise = global.Promise;

module.exports = mongoose;