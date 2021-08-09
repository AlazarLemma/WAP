const express = require('express');
const { request } = require('http');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname,'css')))
const date = new Date();
 const style=date.getHours() > 6 && date.getHours() < 18 ? '/day.css' : '/night.css';
app.get('/', (req, res) => {
 res.render("index.ejs", {
 time: date.toTimeString(),
 style: style,
 name:"Alazar"
 });
});

app.listen(3000);