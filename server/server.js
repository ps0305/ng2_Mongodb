//import the modules
var express = require("express");
var mongodb = require("mongodb");

//create the Rest Object
var app = express();

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//create the MongoClient
var nareshIT = mongodb.MongoClient;

//create the Rest API
app.get("/products",function(req,res){
    nareshIT.connect("mongodb://localhost:27017/angular5",function(err,db){
        db.collection("products").find().toArray(function(err,array){
            res.send(array);
        });
    });
});

//Assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080`");


