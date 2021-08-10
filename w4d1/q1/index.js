const express=require("express");
const cookieParser=require("cookie-parser")
const path=require("path")


const app=express();
app.use("views",path.join(__dirname,view))
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))

app.get("/",(req,res)=>{
      res.render('index',{
          cookies : req.cookies
      })
})
app.post("/add",(req,res)=>{
     let key=req.body.key;
     let value=req.body.value;
     res.cookie(key,value)
     res.redirect(303,'/');
})
app.listen(3000);

