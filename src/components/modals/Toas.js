import React, { useEffect} from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastRegister({message, closeToast}) {

  useEffect(()=>{
    setTimeout(()=>{
      closeToast(false)
    }, 3000);
  },[]);
  return (
    <>
        <ToastContainer
        onClick={()=>closeToast(false)}
        className="p-3" 
        position={"top-center"}
        style={{
          cursor :"pointer"
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

export default ToastRegister;