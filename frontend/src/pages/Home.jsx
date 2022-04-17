import React from 'react'
import { Link } from "react-router-dom";
import data from '../data/Datas'

function Home() {
  return (
    <div className="d-flex flex-column align-items-center my-3">
      <img src={data.Promotion} style={{ width: 1000, maxWidth: '90%' }}/>
    </div>
  )
}

export default Home