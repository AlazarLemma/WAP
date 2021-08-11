const express=require('express');
const path=require('path');
const session=require('express-session');

const app=express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
   secret:"hello",
   resave:false,
   saveUninitialized:true

}));
app.use((req,res,next)=>{
    if(!req.session.cart){
        req.session.cart={};
    }
    next();
})

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
];
app.get('/',(req,res,next)=>{

    res.render('products',{
        products:products
    }
    )
})
    
    app.post('/addToCart', (req, res, next) => {
        let name = req.body.name;
        let price = parseInt(req.body.price)
        
        if(!req.session.cart[name]){
            req.session.cart[name] = {
                'name' : name,
                "price" : price,
                "quallity" : 1
            } 
        }else{
            req.session.cart[name].price += 1;
            req.session.cart[name].quallity+=1;  
        }
        
        res.redirect(303, '/');
    });
    
    app.get('/cart', (req, res, next) => {
        res.render('shoppingCart', {cart: req.session.cart})
    });
app.listen(3000, ()=> {
    console.log("listining");
})