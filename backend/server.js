const express = require('express')
const dotevn = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')
const errorHandler = require('./middleWare/errorHandler')

const port = process.env.PORT || 3000

const path = require('path')

connectDB()
const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/foods', require('./routes/foodRoutes'))

//Server frontend
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html')))
}else{
    app.get('/', (req,res) => res.send('Please set to production'))
}


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

