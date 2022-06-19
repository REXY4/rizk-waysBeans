import React,{useRef, useState} from "react";
import {Form, FloatingLabel, Image, Button}from 'react-bootstrap';
import Attachment from "../assets/images/atthacment.png"

const FormAddData = () => {
  const inputRef = useRef(null);
  const [click, setClick] = useState(false);
  const handleUpload = () => {
    inputRef.current?.click();
  };

  return (
    <Form style={{
      width : "472px"
    }}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" id="inputAddData"/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Stock" id="inputAddData"/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Price" id="inputAddData"/>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Description Product">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          id="inputAddData"
        />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="mt-4 mb-5">
      <div className="d-flex">
       <Form.Control disabled type="text" placeholder="Photo Product" id="inputAddData" 
       style={{
          width : "190px",
        }}/>
       
          <Image 
          onClick={handleUpload}
          onMouseEnter={()=>setClick(true)}
          onMouseLeave={()=>setClick(false)}
          src={Attachment}
          style={{
            position : "relative",
            right : "30px",
            marginTop : "10px",
            width: "18.75px",
            height : "30px",
            cursor : "pointer",
            opacity : click ?  "0.6" : ""
          }} 
          />
      </div>  
      <input ref={inputRef}  type="file" className="d-none"  style={{
            // position : "relative",
            // bottom : "50px"
          }}/> 
      </Form.Group>
      <div className="d-flex justify-content-center"> 
          <Button id="buttonAddChart" style={{
            width : '260px'
          }}>
              Add Product
          </Button>
          </div>
    </Form>
  );
}

export default FormAddData;