let express=require('express')
const app=express()
const userRoutes=require('./routes/userRoutes.js')
const productRoutes=require('./routes/productRoutes.js')
const mongoose=require('mongoose')
const main= require('./db.js')
const cors=require('cors')
const path=require('path')
//connecting mongoose
main()

// app.use(cors({
//     origin:'*',
//     methods:['GET','PUT']
// }))
app.use(cors())

app.use(express.static(path.join(__dirname,'upload')))
app.use(express.json())
//it gets json data from request and add in a object req.body
app.use(express.urlencoded({extended:false}))
//it gets form data from request and add in a object req.body

//routes
app.use('/user',userRoutes)

app.use('/product',productRoutes)


app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})









