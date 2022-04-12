import React from 'react'
import { Card, ListGroup } from "react-bootstrap";

function OrderTrack({ orders }) {
    const statusMap = {
        pending: 'กำลังรอการอนุมัติออเดอร์ ',
        cooking: 'กำลังปรุงอาหาร',
        delivery: 'กำลังส่ง',
        success: 'ส่งสำเร็จ',
    }

    return (
        <>
            {orders !== null ?
                (
                    <div className="d-flex flex-column align-items-center my-3" >
                        {orders.map((data, index) => (
                            <Card key={index} className='my-2'>
                                <Card.Body>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <Card.Title className = 'text-start'> สถานะ: {statusMap[data.status]}</Card.Title>
                                        <Card.Text className = 'ms-5 text-end'>
                                            สั่งเมื่อ {new Date(data.createdAt).toLocaleString('en-US')}
                                        </Card.Text>
                                    </div>
                                    <ListGroup>
                                        {data.order.map((order, key) => (
                                            <ListGroup.Item key = {key}>
                                                <Card.Title> ออเดอร์ที่ {key + 1} </Card.Title>
                                                <Card.Text>
                                                    <strong>samyung:</strong> {order.samyung} ห่อ
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>bacon:</strong> {order.bacon} 
                                                </Card.Text>
                                                <Card.Text>
                                                <strong>cheeseball:</strong> {order.cheeseball} 
                                                </Card.Text>
                                            </ListGroup.Item>
                                        )
                                        )}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )
                :
                (<></>)}
        </>

    )
}

export default OrderTrack