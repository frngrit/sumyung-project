import React from 'react'
import { Card, Button } from "react-bootstrap";

function SummaryOrder({id,order,deleteFunc}) {

    
    return (
        <Card
          key={id}
          className='mb-3'
        >
          <Card.Body>
            <Card.Title>
              <div className="d-flex justify-content-between">
                <h2>{`รายการที่ ${id + 1}`}</h2>
                <Button onClick={() => { deleteFunc(id) }}>X</Button>
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
    )
}

export default SummaryOrder