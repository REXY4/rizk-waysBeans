import React, {useState, useEffect, useContext} from "react";
import {
  Container
} from "react-bootstrap";
import ToastRegister from "./components/modals/Toas";
import NavbarHeader from "./components/navigations/NavbarsHeader";
import { Api, setAuthToken } from "./config/api";
import { UserContext } from "./context/useContenxt";
import MainRoutes from "./routes";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  const [state, dispatch] = useContext(UserContext);
  const loadUsers = async () =>{
    try{
      const config = {
        Autorization : `Bearer ${localStorage.token}`
      }
      const response = await Api.get("/check-auth", config);
      
      if(response.data.status === "success"){
        dispatch({
          type : 'CHECK_AUTH',
          payload : response.data.data.user
        })
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
      loadUsers()
  },[]);

  console.log("ini ds", localStorage.token)
  return (
    <>
    <NavbarHeader />
    <Container style={{
      padding : "50px",
      marginTop : "50px"
    }}>
      <MainRoutes/>
    </Container>
    </>
  );
}

export default App;
