const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');
//mongo
const mongoose = require("mongoose");

const app= new express();
app.use(cors());
app.use(bodyParser.json());


let Student = require('./student.model');
mongoose.connect(
    "mongodb+srv://nandanasc2003:MongoDb123@cluster0.pfhcnqk.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0"
    );
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('MongoDB connection established')
});
//mongoose.connect end connecton is created


app.get("/", (req, res)=>{
    console.log("resquest");
    res.json("hello world!");
});

app.get("/hi", (req, res)=>{
    console.log("hi resquest");
    res.json("hi there");
});

app.get("/people", (req, res)=>{
    console.log("people resquest");
    res.json([
        {name: "John", role:"ds"},
        {name: "raj", role:"os"}
]);
});

app.get("/students", (req, res)=>{
    console.log("people resquest");
    res.json([
        {name: "roshin", age:'25',dept:"ec"},
        {name: "anjima", age:'23',dept:"cse"},
        {name:"sivada", age:'21',dept:"cse"}
]);
});

app.post("/student", (req, res)=>{
    console.log(req.body);
    let student=new Student(req.body);
    student.save()
    .then(()=>{
        res.json("saved successfully")
    })
    .catch((err)=>{
            res.json("Error: " + err)
        });
    });

app.listen("4000",()=>{
    console.log("started server on 4000");
});




// .then(()=>console.log("connected to the database"))
// .catch((err)=> console.log(err));

// //import routes from other files
// const userRoutes = require('./routes/user')
// const productRoutes = require('./routes/product')

// //define the port for server to listen on
// const PORT = process.env.PORT || 5000;

// //apply the defined routes to our application
