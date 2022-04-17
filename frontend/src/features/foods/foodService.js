import axios from 'axios'

const API_URL = '/api/foods/'


const getFoods = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const updateFood = async (data) => {
    const response = await axios.put(API_URL,data)
    return response.data
}


const foodService = {
    getFoods,
    updateFood,
}

export default foodService