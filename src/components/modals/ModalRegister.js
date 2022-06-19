import React, { useContext, useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import { Api } from '../../config/api';
import { UserContext } from '../../context/useContenxt';
import ToastRegister from './Toas';


function ModalRegister({setShowRegister, showRegister, setShowLogin, setMessageAuths, openAlert}){
    const [buttonHere, setButtonHere] = useState(false);
   
    const [openAlertRegister, setOpenAlertRegister] = useState(false);
    //memanggil dari user context providers
    const [messageRegister, setMessageRegister] = useState("");
    const [state, dispatch] = useContext(UserContext);

    const [form, setForm] = useState({
      name : null,
      email : null,
      password : null,
    });
    const {name, email, password} = form;
    const onChange = (e) =>{
      e.preventDefault(e);
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    }

    const onSubmit = async () => {
      try{  
        const config = {
          headers : {
            "content-type" : "application/json"
          }
        }
        const body =  JSON.stringify({
          name: name,
          email: email,
          password: password
        });
        const response = await Api.post("/register",body, config);
        if(response.data.status === "failed"){
         await setMessageRegister(response.data.message);
         await setOpenAlertRegister(true);
        }else{
          await setShowRegister(false);
          await setMessageAuths("register success");
          await openAlert(true)
        }
      }catch(error){
        console.log(error);
      }
    }
  return (
    <>
      <Modal
        show={showRegister}
        onHide={() => setShowRegister(false)}
        dialogClassName="modal-90w"
        size="md"
        style={{
            marginTop : "100px",
        }}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>   
        <h1 className="titleModal mb-4" >Register</h1>    
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
         <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control 
            type="text" 
            placeholder="Full Name" 
            id="inputAddData"
            name="name"
            onChange={(e)=>onChange(e)}
            />
         </Form.Group>
         
        
         <Button 
         id="buttonLoginModal"
         onClick={onSubmit}
         >
            Register
         </Button>
         <div className="footerLogin text-center mt-4 mb-4">
         Already have an account ? Klik 
            <span
            onMouseLeave={()=>setButtonHere(false)}
            onMouseEnter={()=>setButtonHere(true)} 
            onClick={async ()=>{
                
                await setShowRegister(false);
                await setShowLogin(true);
            }}
            style={{
                cursor : "pointer",
                fontFamily : "AvenirBold",
                opacity : buttonHere ? "0.6" : "",
                marginLeft : "5px"
            }}>Here</span>
         </div>
        </Modal.Body>
        {openAlertRegister ?
        <div>
            <ToastRegister message={messageRegister} closeToast={setOpenAlertRegister}/>
         </div>
         :
         <></>}
      </Modal>
     
    </>
  );
}

export default ModalRegister;