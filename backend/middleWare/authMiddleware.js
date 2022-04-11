const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Foods = require('../model/foodModel')

const protect = asyncHandler( async(req,res,next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token
            req.user = await Foods.findById(decoded.id).sort({ 'updatedAt': -1 }).limit(1).select('-password') // (-)minus will exclude the password column

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token){
        res.status(401)
        throw new Error(`Not authorized no token ${token}`)
    }

})

module.exports = protect