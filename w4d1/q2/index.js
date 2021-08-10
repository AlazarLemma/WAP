const express=require("express");
const session=require("express-session")


const app=express();
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret:"helloworld",
    resave:false,
    saveUninitialized:true

}))
app.use(function(req,res,next){
      if(!req.session.view){
          req.session.view={};
      }
      next();
})



app.get('/',(req,res)=>{
    const date = new Date();
    const hours = date.getHours();
    let style="night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.send(
       ` <!DOCTYPE html>
        <html lang="en">
        <head>
        <link rel="stylesheet" href="${style}">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/result" method="POST">
              <label for="name">Name : <input type="text" name="name" id=""></label>
             <label for="age">Age : </label><input type="text" name="age" id="">
             <input type="submit">
            </form>
        </body>
        </html>`
    )
})

app.post('/result',(req,res)=>{     
    let name=req.body.name;
    let age=req.body.age
    req.session.user["name"]=name;
    req.session.age["age"]=age;
    res.redirect(303,`/output?name=${name}&age=${age}`)
})
app.get('/output',(req,res)=>{
    let name = req.session.userData['name'];
    let age = req.session.userData['age'];

    if (name && age) {
        res.send(`Name: ${name} Age: ${age}`);
        
    }else{
        name = "person";
        res.send(`Welcome ${name}`);
    }

});
app.listen(3000,()=>{
    console.log("Active");
})