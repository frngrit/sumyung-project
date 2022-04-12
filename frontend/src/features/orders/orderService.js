import axios from 'axios'

const API_URL = '/api/orders/'


const sendOrder = async (orderData) => {
    const response = await axios.post(API_URL, orderData)
    return response.data
}

const getOrderByPhone = async (phonenumb) => {
    const response = await axios.get(API_URL+phonenumb)
    return response.data
}

const orderService = {
    sendOrder,
    getOrderByPhone,
}

export default orderService