import axios from 'axios'

const API_URL = '/api/orders'

const sendOrder = async (orders) => {
    const response = await axios.post(API_URL, orders)

    return response.data
}

const orderService = {
    sendOrder,
}

export default orderService