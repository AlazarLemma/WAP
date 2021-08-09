const express=require('express');
const path=require('path');


const app=express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'css')))

let products=[

    {
        name: "eyeglass",
        price: 1222,
        quantity: 10,
    },
    {
        name: "book",
        price: 11,
        quantity : 2
    }
]
app.get('/',(req,res)=>{

    res.render('index',{
        title:"Home"  ,
        style: "/forproduct.css"
    }
    )
})
app.get('/product',(req,res)=>{

    res.render('product',{

        name: "Shoe",
        price: 122,
        description: "good",
        id:12,
        title:"Product",
        style: "/forproduct.css"
    })
})
app.get('/shoppingCart',(req,res)=>{

   res.render('shoppingCart',{
      products:products,
      title:"shoppingCart",
      style: "/forshopping.css"
   })

})
app.listen(3000, ()=> {
    console.log("listining");
})