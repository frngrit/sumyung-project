import { Card, Form, Button, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "../data/Datas";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate()
  const submitorder = JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : []


  const [Orders, setOrders] = useState(
    {
      samyung: 0,
      cheeseball: 0,
      bacon: 0,
      submitOrder: submitorder,
    })

  const addToCart = (e) => {
    e.preventDefault()
    const { cheeseball, samyung, bacon, submitOrder } = Orders

    if (samyung === 0) {
      window.alert('กรุณาเลือกมาม่าเผ็ดอย่างน้อย 1 ซอง')
      return
    }

    submitOrder.push({
      cheeseball,
      samyung,
      bacon
    })
    setOrders({
      submitOrder,
      cheeseball: 0,
      samyung: 0,
      bacon: 0,
    })
    localStorage.setItem('orders', JSON.stringify(Orders.submitOrder ))
  }
  const Checkout = (e) => {
    navigate('/checkout')
  }

  return (
    <div className="container my-3">
      <h1 className="display-3 text-center">Menu</h1>
      {data.menus.map((menu, key) => (
        <Card
          key={key}
          className='mb-3'
        >
          <Card.Body>
            <Card.Img variant="top" src={menu.source} className='w-25' style={{ minWidth: 150 }} />
            <Card.Title>
              <h2>{menu.name}</h2>
            </Card.Title>
            <Card.Text>
              {menu.description}
            </Card.Text>
            <Form
              onSubmit={addToCart}
            >
              <Form.Select
                name={menu.code}
                value={Orders[`${menu.code}`]}
                onChange={(e) => {
                  setOrders((prevState) => (
                    {
                      ...prevState,
                      [e.target.name]: +e.target.value
                    }
                  )
                  )
                }}>
                {[...Array(11).keys()].map((value, index) => (<option key={index}>{value}</option>))}
              </Form.Select>
            </Form>
          </Card.Body>
        </Card>
      ))}
      <div className='row justify-content-end mb-3 mx-2'>
        <Button
          className='my-1 mx-1'
          style={{ maxWidth: 200 }}
          onClick={addToCart}
        >
          Add to cart &nbsp;{<Badge size='lg' bg='secondary'> {Orders.submitOrder.length} </Badge>}
        </Button>
        <Button
          variant='outline-success'
          className='my-1 mx-1'
          style={{ maxWidth: 200 }}
          onClick = {Checkout}
        >
          Submit orders
        </Button>
      </div>
    </div>
  )
}

export default Order