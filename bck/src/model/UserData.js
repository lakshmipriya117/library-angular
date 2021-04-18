const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:user@ictak.mx5eh.mongodb.net/Reviews?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    pwd:String,
    phone:Number
});
var Userdata = mongoose.model('user',UserSchema);
module.exports  = Userdata;