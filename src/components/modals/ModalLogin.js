import React, { useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";

function ModalLogin({setShowLogin, showLogin, setShowRegister}){
    const [buttonHere, setButtonHere] = useState(false);

  return (
    <>
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        dialogClassName="modal-90w"
        size="md"
        style={{
            marginTop : "100px",
        }}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>   
        <h1 className="titleModal mb-4" >Login</h1>    
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" id="inputAddData"/>
         </Form.Group>
         <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Password" id="inputAddData"/>
         </Form.Group>
         <Button id="buttonLoginModal">
            Login
         </Button>
         <div className="footerLogin text-center mt-4 mb-4">
            Don't have an account ? Klik 
            <span
            onMouseLeave={()=>setButtonHere(false)}
            onMouseEnter={()=>setButtonHere(true)} 
            onClick={async ()=>{
                await setShowLogin(false);
                await setShowRegister(true);
            }}
            style={{
                cursor : "pointer",
                fontFamily : "AvenirBold",
                opacity : buttonHere ? "0.6" : "",
                marginLeft : "5px"
            }}>Here</span>
         </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;