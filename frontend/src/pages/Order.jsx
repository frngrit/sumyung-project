import { Card, Form,Button } from "react-bootstrap";
import { useState } from "react";
import Menus  from "../data/Menus";
function Order() {

  const [orderAmount,setOrderAmount] = useState(
    {
      cheeseball:0,
      sumyung:0,
      bacon:0
    })
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1 className="display-3 text-center">Menu</h1>
      {Menus.map((menu, key) => (
        <Card
          key={key}
          className = 'mb-3'
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
            onSubmit = {onSubmit}
            >
              <Form.Select
              name = {menu.code}
              value = {orderAmount.code}
              onChange = { (e) =>  {
                  setOrderAmount((prevState) => (
                  { 
                    ...prevState,
                    [e.target.name]:+e.target.value}
                  )
                )}}>
                {[...Array(11).keys()].map((value, index) => (<option key={index}>{value}</option>))}
              </Form.Select>
            </Form>
          </Card.Body>
        </Card>
      ))}
      <div className = 'row justify-content-end mb-3 mx-2'>
        <Button
        className = 'my-1 mx-1'
        style = {{maxWidth:200}}
        >
          Add to cart
        </Button>
        <Button
        className = 'my-1 mx-1'
        style = {{maxWidth:200}}
        >
          Submit orders
        </Button>
      </div>
    </div>
  )
}

export default Order