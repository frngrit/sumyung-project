import React, {useState} from 'react'
import { useLocation } from "react-router-dom";
import OrderTrack from '../components/OrderTrack'
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getOrderByPhone } from "../features/orders/orderSlice";

function Tracking() {
  var {dummy} = useLocation() || null
  const [phonenumb,setPhonumber] = useState(dummy)
  const [form,setForm] = useState('')


  //Get Order
  const dispatch = useDispatch()
  if(phonenumb){
    dispatch(getOrderByPhone(phonenumb))
  }

  return (
    <div className="container">
      <h1 className="display-3 text-center">Track your order</h1>
      <div className="d-flex flex-column align-items-center my-3">
        {phonenumb? 
        (<div>
          <h1 className="display-6 text-center">Order of {phonenumb}</h1>
          <OrderTrack phonenumb = {phonenumb}/>
        </div>) 
        : 
        (<div>
          <h1 className="display-5 text-center">Please insert your phone number</h1>
          <Form>
            <Form.Control type = 'text' value = {form} onChange = {e => setForm(e.target.value)}/>
            <Button className = 'my-2' onClick = {e => setPhonumber(form)}>search</Button>
          </Form>
          <OrderTrack phonenumb = {phonenumb}/>
        </div>)
        }
      </div>
    </div>
  )
}

export default Tracking