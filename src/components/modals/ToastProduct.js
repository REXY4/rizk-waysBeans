import React, { } from 'react';
import {useNavigate} from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastProduct({message, closeToast}) {
let navigate =  useNavigate();
  return ( 
    <>  
           <ToastContainer
        onClick={()=>{
            closeToast(false)
            window.location.replace("/")
        }}
        className="p-3" 
        position={"middle-center"}
        style={{
          cursor :"pointer",
          position : "relative",
          zIndex : 6
        }}
        >
          <Toast>
            <Toast.Body className="">
              <div className='text-center'>
               <p className="toastText ">{message}</p>
               </div> 
            </Toast.Body>
          </Toast>
        </ToastContainer>

    </>
  );
}

export default ToastProduct;