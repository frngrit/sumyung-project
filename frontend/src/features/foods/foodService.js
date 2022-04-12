import axios from 'axios'

const API_URL = '/api/foods/'


const getFoods = async () => {
    const response = await axios.get(API_URL)
    return response.data
}


const foodService = {
    getFoods,
}

export default foodService