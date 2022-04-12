import React from 'react'

function OrderTrack({phonenumb}) {

  return (
      <>
        {phonenumb? 
        (<div className = "d-flex flex-column align-items-center my-3">
            Get phonenumb
        </div>) 
        : 
        (<div className = "d-flex flex-column align-items-center my-3">
            dont Get phonenumb
        </div>)
        }
      </>
  )
}

export default OrderTrack