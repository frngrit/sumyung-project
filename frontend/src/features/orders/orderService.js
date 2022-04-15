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

const getOrders = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const updateOrder = async (data) => {
    const {id,status} = data
    const response = await axios.put(API_URL+id,status)
    return response.data
}


const orderService = {
    sendOrder,
    getOrderByPhone,
    getOrders,
    updateOrder
}

export default orderService