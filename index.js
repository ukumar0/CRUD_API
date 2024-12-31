const express = require('express')
const mongoose = require('mongoose')
const Product = require('./product_model.js')
const app = express()
const productRoute = require('./routes/product_route.js')

const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', productRoute)


mongoose.connect('mongodb+srv://admin:dbUserPassword@backenddb.5q07h.mongodb.net/NODE_API?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
    console.log('Connected to Database')
    app.listen(PORT, ()=>{
        console.log(`It's running on ${PORT}`)
    })
})
.catch((e)=>{
    console.log('connection failed')
})

app.get('', (req, res)=>{
    res.send('hello from node api')
})

