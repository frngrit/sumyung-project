const express = require('express')
const router = express.Router()
const {getOrderByPhone,getOrders,sendOrder,updateOrder} = require('../controller/orderController')
const protect = require('../middleWare/authMiddleware')

// @api/orders/:phone
router.route('/:phone').get(getOrderByPhone)

// @api/orders/:id
router.route('/:id').put(protect,updateOrder)


// @api/orders/
router.route('/').get(getOrders).post(sendOrder)



module.exports = router