import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Payment() {

  const navigate = useNavigate()

  const usernameCheck = 'firstmeet1709'
  const [username, setUser] = useState("");

  useEffect(() => {
    setUser(prompt("enter"));
  }, []);

  if (usernameCheck !== username){
    return(<div>Not authorized</div>)
  }

  return (
    <div>Payment</div>
  )
}

export default Payment