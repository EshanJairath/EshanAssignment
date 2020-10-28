//jshint esversion:6
const express = require("express");
const { json } = require("express");
const bodyparser = require('body-parser');

const user = require('./userSchema');
const { model } = require("./userSchema");
const UserData = require("./userSchema");

const multer = require("multer");

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, 'uploads');
  },
  filename:(req,file, cb)=>{
    cb(null,file.fieldname + '-' + Date.now());
  }
});
const upload = multer ({storage:storage});


const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.post('/users',(req,res)=>{
  const doc = new UserData(req.body);
  doc.save();

})

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(5000, () => {
  console.log("server Started on port 5000");
});
