import React,{useState} from 'react'
import { Card, Button } from "react-bootstrap";
import data from "../data/Datas";
import QR from '../images/QR.jpg'

function Confirm() {
  const [orders,setOrders] = useState(JSON.parse(localStorage.getItem('orders')))
  const {menus} = data
  var total = 0
  for (var menu of menus){
    const {price,code} = menu
    for (var order of orders){
      total += +price * order[code]
    }
  }

  const Delete = (key) => {
    const temp = orders.filter( (order,index) => {
      return index !== key
    })
    setOrders(temp)
    localStorage.setItem('orders', JSON.stringify(temp))
  }

  return (
    <div className="container">
      <h1 className="display-3 text-center">Confirm</h1>
      {orders.map((order, key) => (
        <Card
          key={key}
          className='mb-3'
        >
          <Card.Body>
            <Card.Title>
            <div className="d-flex justify-content-between">
              <h2>{`รายการที่ ${key+1}`}</h2>
              <Button onClick = {() => {Delete(key)}}>X</Button>
            </div>
            </Card.Title>
            <Card.Text>
              {`ซัมยังมาม่าเผ็ด: ${order.samyung}`}
            </Card.Text>
            <Card.Text>
              {`เบค่อน: ${order.bacon}`}
            </Card.Text>
            <Card.Text>
              {`ลูกชิ้นชีส: ${order.cheeseball}`}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      <h4>รวม <strong>{total}</strong> บาท</h4>
      <div className="d-flex justify-content-center my-3">
        <img src = {QR} style = {{width:400, maxWidth: '90%'}} className="img-thumbnail"/>
      </div>
    </div>
  )
}

export default Confirm