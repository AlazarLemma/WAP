const express = require('express');
const app = express();
app.use("/result",express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    
    res.send("<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>Document</title>"+
        "</head>"+
        "<body>"+
            "<form action='/result' method='POST'>"+
                "<label>Name <input type='text' name='name'></label>"+
                "<label>Age <input type='text' name='age'></label>"+
                "<input type='submit' value='submit query'></label>"+
            "</form>"+
        "</body>"+
    "</html>");
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name}, you are ${age} years old`);
});
app.listen(3010);