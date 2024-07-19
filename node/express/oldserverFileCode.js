let express=require('express')
const {products}=require('./data.js')
const morgan=require('morgan')
const app=express()
//middleware => 

// app.use('/user',(req,res,next)=>{
//     console.log(req.ip)
//     next()//next function is used to forward request
// })
// app.use(morgan())
app.use(express.json())//it gets json data from request and add in a object req.body
app.use(express.urlencoded({extended:false}))//it gets form data from request and add in a object req.body

//get =>product => all products
//post=>product => add product
// making api => request on some url (endpoint) => response should be json

app.get('/user',(req,res)=>{

})
app.post('user/signup',(req,res)=>{

})
app.post('/user/login',(req,res)=>{
    
})
app.delete('/user/:id',(req,res)=>{
    
})
app.put('/user/:id',(req,res)=>{
    
})



app.get('/product',(req,res)=>{    
    res.json({
        status:'success',
        products:products
    })
})

app.post('/product',(req,res)=>{
    //product add logic here
    console.log(req.body)
    products.push(req.body)
    res.json({
        status:'success',
        massage:'product added successfully'
    })
})
//dynamic routing
app.delete('/product/:id',(req,res)=>{
    //product delete logic here
    res.json({
        status:'success',
        massage:'product deleted successfully'
    })
})
app.put('/product/:id',(req,res)=>{
    //product update logic here
    res.json({
        status:'success',
        massage:'product updated successfully'
    })
})

// app.get('/product',(req,res)=>{
//     res.send('all product page')
// })

// app.post('/product',(req,res)=>{
//     res.send('product added')
// })
// //dynamic routing
// app.delete('/product/:id',(req,res)=>{
//     res.send('product deleted')
// })
// app.put('/product/:id',(req,res)=>{
//     res.send('product updated')
// })



app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})











