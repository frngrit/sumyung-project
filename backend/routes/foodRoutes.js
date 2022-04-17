const express = require('express')
const router = express.Router()
const {getFoods, MakeFoods, updateFoods, Login,getMe} = require('../controller/foodController')
const protect = require('../middleWare/authMiddleware')

// @/api/foods/
router.route('/').get(getFoods).post(MakeFoods).put(updateFoods)

// @/api/foods/login
router.route('/login').post(Login)

// @/api/foods/me
router.route('/me').get(protect,getMe)



module.exports = router