const asyncHandler = require('express-async-handler')
const { findById } = require('../model/orderModel')
const Order = require('../model/orderModel')

//@desc send order
//@route POST /api/orders/
//@access Public
const sendOrder = asyncHandler(async (req, res) => {
    try {
        const { order, slip, phonenumb, contact, comment, location } = req.body

        if (!order || !slip || !phonenumb || !location) {
            res.status(400)
            throw new Error('Please provide all the information')
        }

        const orderData = await Order.create({
            order,
            slip,
            phonenumb,
            contact,
            comment,
            location
        })

        res.status(200).json(
            orderData
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})



//@desc Get all orders
//@route GET /api/orders/
//@access Public
const getOrders = asyncHandler(async (req, res) => {
    try {
        const orders = await Order.find()
        
        res.status(200).json(
            orders
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})


//@desc Get order by phone number
//@route GET /api/orders/:phone
//@access Public
const getOrderByPhone = asyncHandler(async (req, res) => {

    try {
        const PhoneNumber = req.params.phone

        const orders = await Order.find({'phonenumb':PhoneNumber}).sort({'updatedAt':-1})

        res.status(200).json(orders)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//@desc sender order
//@route PUT /api/orders/:id
//@access Private
const updateOrder = asyncHandler(async (req, res) => {
    try {
        if (!req.body.status){
            res.status(400)
            throw new Error('No status provided')
        }

        const order = await Order.findByIdAndUpdate(req.params.id,{status:req.body.status})

        //Check if order exist

        if(!order){
            res.status(400)
            throw new Error(`No order found, order : ${req.params.id}`)
        }


        res.status(200).json(
            {
                order,
                message: `order ${req.params.id} updated!`
            }
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})

module.exports = {
    sendOrder,
    getOrderByPhone,
    getOrders,
    updateOrder
}