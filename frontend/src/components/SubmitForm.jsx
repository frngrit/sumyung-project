import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import QR from '../images/QR.jpg'
import FileBase64 from 'react-file-base64';

function SubmitForm({orders}) {

    const [formData, setFormData] = useState({
        submiteorder: orders,
        slip: '',
        phonenumb: '',
        contact: '',
        comment: '',
        location: ''
    })
    const { phonenumb, contact, comment, location } = formData

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            submiteorder: orders,
            [e.target.id]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(orders)
        console.log(formData)
    }

    return (
        <div className="d-flex flex-column align-items-center my-3">
            <img src={QR} style={{ width: 400, maxWidth: '90%' }} className="img-thumbnail" />
            <Form style={{ maxWidth: '90%', width: 1000 }} className='my-2' onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label className='my-2'>เบอร์โทรศัพท์</Form.Label>
                    <Form.Control type="text" placeholder='เบอร์โทรศัพท์' id='phonenumb' value={phonenumb} onChange={onChange} />
                    <Form.Label className='my-2'>ช่องทางการติดต่อเผื่อในกรณีที่มีปัญหา (เช่น Line)</Form.Label>
                    <Form.Control type="text" placeholder='ช่องทางการติดต่อ' id='contact' value={contact} onChange={onChange} />
                    <Form.Label className='my-2'>ที่อยู่</Form.Label>
                    <Form.Control type="text" placeholder='ชื่อหอ / คอนโด' id='location' value={location} onChange={onChange} />
                    <Form.Label className='my-2'>เพิ่มเติม</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder='เช่น เผ็ดน้อย, ไม่โรยสาหร่าย' id='comment' value={comment} onChange={onChange} />
                    <Form.Label className='my-2'>อัพโหลดสลิป</Form.Label>
                    <div>
                        <FileBase64
                            className="form-control"
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setFormData(prevState => ({ ...prevState, slip: base64 }))}
                        />
                    </div>
                    <Button type='submit' className='my-3'> Submit </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SubmitForm