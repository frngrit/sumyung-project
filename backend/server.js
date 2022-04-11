const express = require('express')
const dotevn = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')
const errorHandler = require('./middleWare/errorHandler')

const port = process.env.PORT || 3000

connectDB()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/foods', require('./routes/foodRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

