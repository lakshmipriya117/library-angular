const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:user@ictak.mx5eh.mongodb.net/Reviews?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    proName: String,
    proAuth: String,
     proGenre: String,
     
     proDesc: String,
   
});
var Reviewdata = mongoose.model('review',ReviewSchema);
module.exports  = Reviewdata;