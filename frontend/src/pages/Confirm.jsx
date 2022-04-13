import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap";
import data from "../data/Datas";
import QR from '../images/QR.jpg'
import FileBase64 from 'react-file-base64';
import SummaryOrder from '../components/SummaryOrder'

import {useDispatch,useSelector} from 'react-redux'
import {sendOrder, reset} from '../features/orders/orderSlice'
import Spinner from '../components/Spinner';
import { useNavigate } from "react-router-dom";

function Confirm() {

  const navigate = useNavigate()
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')))
  const dispatch = useDispatch()
  const {isLoading} = useSelector( (state) => state.order)

  

  const [formData, setFormData] = useState({
    order: orders,
    slip: '',
    phonenumb: '',
    contact: '',
    comment: '',
    location: ''
  })

  const { slip, phonenumb, contact, comment, location } = formData


  useEffect( () => {
    return () => {
      dispatch(reset())
    }
  },[]) 

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      order: orders,
      [e.target.id]: e.target.value
    })
    )
  }

  //Submit Order
  const onSubmit = async (e) => {
    e.preventDefault()
    //Check if it has order
    if (formData.order.length <= 0){
      alert('กรุณาสั่งอาหาร')
      return
    }


    //send order
    await dispatch(sendOrder(formData))

    //delete localStorage
    localStorage.removeItem('orders')

    //navigate to tracking
    navigate('/track', {state:phonenumb})
  }

  const Delete = (key) => {

    const temp = orders.filter((order, index) => {
      return index !== key
    })

    setOrders(temp)

    localStorage.setItem('orders', JSON.stringify(temp))
    setFormData(prevState => ({
      ...prevState,
      order: temp,
  })
  )
  }

  //find total amout
  const { menus } = data
  var total = 0
  for (var menu of menus) {
    const { price, code } = menu
    for (var order of orders) {
      total += +price * order[code]
    }
  }
  //

  if(isLoading){
    return (<Spinner />)
  }


  return (
    <div className="container">
      <h1 className="display-3 text-center">Confirm</h1>
      {orders.map((order, key) => (
        <SummaryOrder key={key} id={key} order={order} deleteFunc={Delete} />
      ))}
      <h4>รวม <strong>{total}</strong> บาท</h4>
      <div className="d-flex flex-column align-items-center my-3">
        <img src={QR} style={{ width: 400, maxWidth: '90%' }} alt = 'QR-code' className="img-thumbnail" />
        <Form style={{ maxWidth: '90%', width: 1000 }} className='my-2' onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label className='my-2'>เบอร์โทรศัพท์ (ต้องใส่)</Form.Label>
            <Form.Control type="text" placeholder='เบอร์โทรศัพท์' id='phonenumb' value={phonenumb} onChange={onChange} />
            <Form.Label className='my-2'>ช่องทางการติดต่อเผื่อในกรณีที่มีปัญหา (เช่น Line)</Form.Label>
            <Form.Control type="text" placeholder='ช่องทางการติดต่อ' id='contact' value={contact} onChange={onChange} />
            <Form.Label className='my-2'>ที่อยู่ (ต้องใส่)</Form.Label>
            <Form.Control type="text" placeholder='ชื่อหอ / คอนโด' id='location' value={location} onChange={onChange} />
            <Form.Label className='my-2'>เพิ่มเติม</Form.Label>
            <Form.Control as='textarea' type="text" placeholder='เช่น เผ็ดน้อย, ไม่โรยสาหร่าย' id='comment' value={comment} onChange={onChange} />
            <Form.Label className='my-2'>อัพโหลดสลิป (ต้องใส่)</Form.Label>
            <div className="d-flex flex-column align-items-left">
              <FileBase64
                className="form-control"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setFormData(prevState => ({ ...prevState, slip: base64 }))}
              />
              {slip.length > 0? <img src={slip} style={{ width: 400, maxWidth: '90%' }} alt = 'slip' className="img-thumbnail my-2" /> : <></>}
            </div>
            <Button type='submit' className='my-3'> Submit </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Confirm