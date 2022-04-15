import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import sha256 from 'js-sha256'
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { getOrders, reset, updateOrder } from "../features/orders/orderSlice";
import Spinner from '../components/Spinner';

function Payment() {

  const dispatch = useDispatch()

  const usernameCheck = '8a81222147a1da225c19d20b34b11fd005dbe71b5282b85e2cfe442b25633029'
  const [username, setUser] = useState("");

  const { orders,isLoading } = useSelector((state) => state.order)

  useEffect(() => {
    setUser(sha256(prompt("enter")))
    dispatch(getOrders())

    return () => {
      dispatch(reset())
    }
  }, [dispatch]);


  if (usernameCheck !== username) {
    return (<div>Not authorized</div>)
  }

  const onClick = async (e) => {
    const {id,value} = e.target
    const data = {id}
    if (value === 'pending'){
      data['status'] = {status:'cooking'}
      await dispatch(updateOrder(data))
    }
    else if (value === 'cooking'){
      data['status'] = {status:'delivery'}
      await dispatch(updateOrder(data))
    }else if (value === 'delivery'){
      data['status'] = {status:'pending'}
      await dispatch(updateOrder(data))
    }else{
      console.log('error')
    }

    dispatch(getOrders())
  }

  if(isLoading){
    return (<Spinner />)
  }

  return (
    <>
    {orders?  
    (
    <>
    <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>order</th>
            <th>phone number</th>
            <th>location</th>
            <th>slip</th>
            <th>status</th>
            <th>comment</th>
            <th>Create at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((data, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{JSON.stringify(data['order'])}</td>
              <td>{data.phonenumb}</td>
              <td>{data.location}</td>
              <td><img src = {data.slip} style = {{width:'70%', minWidth:300}}/></td>
              <td>{data.status}</td>
              <td>{data.comment}</td>
              <td>{new Date(data.createdAt).toLocaleString('en-US')}</td>
              <td><Button id = {data._id} value = {data.status} onClick = {onClick}>Update</Button></td>
            </tr>
        ))}
        </tbody>
      </Table>
    </>
    )
    : 
    (<>Error</>)}
      
    </>
  )
}

export default Payment