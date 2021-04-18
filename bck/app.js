const express = require("express");
const path=require("path");
const Reviewdata = require("./src/model/ReviewData");
const Userdata = require("./src/model/UserData");
const cors = require("cors");
var bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");

var app = new express();
app.use(cors());
app.use(express.json());
 app.use('/img',express.static(path.join("C:/Users/user/demo/bck/public/img")));
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
app.post('/insert', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("working");
    console.log(req.body);
    var review = {
     proName: req.body.review.proName,
     proAuth: req.body.review.proAuth,
     proGenre: req.body.review.proGenre,
     
     proDesc: req.body.review.proDesc,
     proImage: req.body.review.proImage
    }
    var rev = Reviewdata(review);
    rev.save();
});
app.post('/new', function(req,res){
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("working");
    console.log(req.body);
    var user = {
      fname:req.body.user.fname,
      lname:req.body.user.lname,
      email:req.body.user.email,
      pwd:req.body.user.pwd,
      phone:req.body.user.phone
    }
    var user = Userdata(user);
    user.save();
});
app.get('/reviews',function(req,res){
    Reviewdata.find()
    .then(function(reviews){
        res.send(reviews);
    });
});
app.get('/malreviews',function(req,res){
    var mal=[];
    Reviewdata.find()
    .then(function(reviews){
      for(var i=0;i<=reviews.length;i++){
        if(reviews[i].filmLanguage=="Malayalam"){
          mal+=reviews[i];
          res.send(mal);
        }
      }
  });
});

app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      Reviewdata.findOne({"_id":id})
      .then((review)=>{
          res.send(review);
      });
  })
  app.put('/update',(req,res,err)=>{
    console.log(req.body)
    id=req.body._id,
    Name= req.body.Name,
    Auth= req.body.Auth,
    Genre= req.body.Genre,
  
    Desc=req.body.Desc,
    Image=req.body.Image
    
   Reviewdata.findByIdAndUpdate({"_id":id},
                                {$set:{"proName":Name,
                                "proAuth":Auth,
                                "proGenre":Genre,
                                
                                "proDesc":Desc,
                                "proImage":Image
                                }})
   .then(function(){
       res.send();
   })
 })
 app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    Reviewdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  app.post('/auth', (req, res) => {
    
    var mail = req.body.uname;
      var password = req.body.pwd;
      Userdata.findOne({email:mail})
      .then(function(user){
        console.log(user);
        if (!user) {
          ///console.log("invalid user");
          res.status(401).send('Invalid User')
        } 
        else if(password!=user.pwd){
          res.status(401).send('Invalid User')
        }
        else {
          let payload = {subject: mail+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        } 
        })
      
        
      
    })
app.listen(3000,function(){

});
