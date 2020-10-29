//jshint esversion:6
const mongoose = require('mongoose');

const connectionUri =
  "mongodb+srv://<user>:<password>@<dbname>.r4iht.mongodb.net/cluster0?retryWrites=true&w=majority";

mongoose.connect(connectionUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const imgPath = '/path/yourimage.png';

const userSchema = mongoose.Schema({
    Fname:  {type:String},
    Lname:  {type:String},
    email:  {type:String},
    Number: {type:Number},
    img:    {type:String},
});


mongoose.connection.once('open', ()=>{
    console.log("************* !! Database Connected !! **************");
  });
const UserData = mongoose.model('User',userSchema);
module.exports = UserData;

