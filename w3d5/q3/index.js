const express = require('express');
const path=require("path");
const app = express();

app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';

    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" name="age" id="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
        </html>`
    );
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3015);