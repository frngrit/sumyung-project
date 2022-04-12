import axios from 'axios'

const API_URL = '/api/orders'


const sendOrder = async (orderData) => {
    const response = await axios.post(API_URL, orderData)
    if (response){
        return response.data
    }
    return 'error'
}

const orderService = {
    sendOrder,
}

export default orderService