import React, {useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import OrderTrack from '../components/OrderTrack'
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByPhone,reset } from "../features/orders/orderSlice";

function Tracking() {
  var {state} = useLocation() || null
  const [phonenumb,setPhonumber] = useState(state)
  const [form,setForm] = useState('')
  
  const {orders} = useSelector( (state) => state.order)

  
  //Get Order
  const dispatch = useDispatch()
  

  useEffect( () => {
    if(phonenumb){
      dispatch(getOrderByPhone(phonenumb))
    }
    return () => {
      dispatch(reset())
    }
  }, [phonenumb,dispatch]) 


  return (
    <div className="container">
      <h1 className="display-3 text-center">Track your order</h1>
      <div className="d-flex flex-column align-items-center my-3">
        {phonenumb? 
        (<div>
          <h1 className="display-6 text-center">Order of {phonenumb}</h1>
          <OrderTrack orders = {orders}/>
        </div>) 
        : 
        (<div>
          <h1 className="display-5 text-center">Please insert your phone number</h1>
          <Form>
            <Form.Control type = 'text' value = {form} onChange = {e => setForm(e.target.value)}/>
            <Button className = 'my-2' style = {{width:'100%'}} onClick = {e => setPhonumber(form)}>search</Button>
          </Form>
        </div>)
        }
      </div>
    </div>
  )
}

export default Tracking