const exp = require("express");
const cors = require("cors");
const parse = require("body-parser");
const mongo = require("mongodb").MongoClient;


const app = exp();

app.get("/",(req,res)=>{
    res.send("<h3>Gopinath</h3>")
});

module.exports = app;

var db;

mongo.connect("mongodb+srv://gopi:gopi@cluster0.xwc29.mongodb.net/shoppingcart?retryWrites=true&w=majority",(error,database)=>{
    if(!error){
        db= database.db("shoppingcart");
        db.collection("user").find({},{projection : {_id:1,Username :1}}).toArray((err,data)=>{
            console.log(data);
        });
        console.log("DB worked");
    }
    else{
        console.log("DB not worked");
    }
})



var products = [{"pdtname": "Knorr Instant Soup (100 Gm)","pdtprice" : "78", "pdtimg":"http://localhost:4200/assets/images/5.png"},
{pdtname: "Chings Noodles (75 Gm)",pdtprice : "45", pdtimg:"http://localhost:4200/assets/images/6.png"},
{pdtname: "Lahsun Sev (150 Gm)",pdtprice : "56", pdtimg:"http://localhost:4200/assets/images/7.png"},
{pdtname: "Premium Bake Rusk (300 Gm)",pdtprice : "67", pdtimg:"http://localhost:4200/assets/images/8.png"}];

app.use(cors());

app.use(parse.json());

app.get("/listproduct",(req,res)=>{
    res.send(products);
});

app.post("/register",(req,res)=>{
    req.body._id = new Date().getTime();
    console.log(req.body);
    console.log(res.json);
    db.collection("users").insert(req.body,(error,data)=>{

    
    if(error || !data)
    {
        res.status(403).json("Error");

    }
    else{
        res.json("user registered success");
    }
});
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("users").find(req.body,{projection : {_id:1,username :1}}).toArray((error,data)=>{
        res.json(data);
    });
    
})



