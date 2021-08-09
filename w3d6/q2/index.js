const express = require('express');
const app = express();
const path=require('path');

app.set('view engine','ejs');
//app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
    
    res.render('index');
});
app.post('/result', (req, res) => {
    res.render('result',{
        name:req.body.name,
        age: req.body.age
    })
})
    // app.post('/try',(req,res)=>{
    //     res.render('try',{
    //         name:req.body.name,
    //         age:req.body.age

    // //     })

    // })
app.listen(3000);