const asyncHandler = require('express-async-handler')
const Foods = require('../model/foodModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//@desc Make ingredients balance
//@route POST /api/foods/
//@access Private

const MakeFoods = (asyncHandler(async (req, res) => {
    try {
        const { samyung, bacon, cheeseball, isOpen, username, password } = req.body

        if (!samyung || !bacon || !cheeseball || !isOpen
            || !username || !password
            ) {
            res.status(400)
            throw new Error(`please provide all information (updateFood: samyung: ${samyung}, bacon: ${bacon}, cheeseBall: ${cheeseball}, isOpen: ${isOpen})`)
        }

        //Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const Food = await Foods.create({
            samyung,
            bacon,
            cheeseball,
            isOpen,
            username, 
            password:hashedPassword,
        })

        res.status(200).json(
            Food
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
)


//@desc Get ingredients balance
//@route GET /api/foods/
//@access Public

const getFoods = (asyncHandler(async (req, res) => {
    try {
        const LatestFood = await Foods.find().sort({ 'updatedAt': -1 }).limit(1).select('-password -username')

        if (!LatestFood) {
            res.status(400)
            throw new Error(`No latest food ${LatestFood}`)
        }

        res.status(200).json(
            LatestFood
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
}))

//@desc Update ingredients balance
//@route PUT /api/foods/
//@access Private

const updateFoods = ( asyncHandler ( async (req, res) => {
    try {
        var { samyung, bacon, cheeseball } = req.body

        if (!(samyung+1) || !(bacon+1) || !(cheeseball+1)) {
            res.status(400)
            throw new Error(`please provide all information (updateFood: samyung: ${samyung}
                , bacon: ${bacon}, cheeseBall: ${cheeseball})`)
        }

        const LatestFood = await Foods.find().sort({ 'updatedAt': -1 }).limit(1)

        if (!LatestFood) {
            res.status(400)
            throw new Error(`No latest food ${LatestFood}`)
        }

        samyung = +LatestFood[0].samyung - samyung
        bacon = +LatestFood[0].bacon - bacon
        cheeseball = +LatestFood[0].cheeseball - cheeseball
        const username = LatestFood[0].username
        const password = LatestFood[0].password

        const updateFood = await Foods.create({
            samyung,
            bacon,
            cheeseball,
            isOpen: true,
            username,
            password
        })

        res.status(200).json(
            updateFood
        )
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
)

//@desc Make ingredients balance
//@route POST /api/foods/
//@access Public

const Login = (asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            res.status(400)
            throw new Error(`please provide all information (Login: username: ${username}, password: ${password}`)
        }
        const user = await Foods.findOne({username})
        if (user && (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                id:user.id,
                username: user.username,
                token: generateToken(user.id)
            })
        } else{
            res.status(400)
            throw new Error('Invalid credentials')
        }



    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
)

//@desc Get user data
//@route GET /api/users/me
//@access Private
const getMe = asyncHandler(async(req,res) => {

    res.status(200).json(req.user)
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    getFoods,
    MakeFoods,
    updateFoods,
    Login,
    getMe,
}