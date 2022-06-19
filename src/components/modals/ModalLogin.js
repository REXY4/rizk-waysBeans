/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import { Api } from '../../config/api';
import { UserContext } from '../../context/useContenxt';


function ModalLogin({setShowLogin, showLogin, setShowRegister}){
    const [buttonHere, setButtonHere] = useState(false);
    const [state, dispatch] = useContext(UserContext)
    const [form, setForm] = useState({
      email : null,
      password : null
    });

    const {email, password} = form;
    
    const onChange = (e) => {
      e.preventDefault(e);
      setForm({
        ...form,
        [e.target.name] : e.target.value
      });
    }

    const onSubmit = async() =>{
      try{
        const config = {
          headers : {
            "content-type" : "application/json"
          }
        }
        const body = JSON.stringify({
          email : email,
          password:  password,
        })
        const response = await Api.post("/login", body, config);
       
        if(response.data.status === "success"){
          await localStorage.setItem("token", response.data.data.user.token );
         await dispatch({
            type : 'LOGIN_SUCCESS',
            payload : response.data.data.user
          });
          setShowLogin(false);
        }
      }catch(error){

      }
    }
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
        <Form.Control 
        type="email"
         placeholder="Email" 
         id="inputAddData"
         name="email"
         onChange={(e)=>onChange(e)}
         />
         </Form.Group>
         <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control 
            type="password"
             placeholder="Password" 
             id="inputAddData"
             name="password"
             onChange={(e)=>onChange(e)}
             />
         </Form.Group>
         <Button
         onClick={onSubmit} 
         id="buttonLoginModal"
         >
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