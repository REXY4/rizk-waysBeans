import React,{useState} from "react";
import { 
    Navbar,
    Container,
    Button
} from "react-bootstrap";
import "../../styles/navigation.css"
import logo from "../../assets/Logo.svg";
import ModalLogin from "../modals/ModalLogin";
import ModalRegister from "../modals/ModalRegister";

const NavbarHeader = () =>{
  const [showLogin,setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
    return(
        <Navbar className="bodyNav">
         <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              width="163.11px"
              height="47.11px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button 
          variant="outline-secondary" 
          id="button-login"
          onClick={()=>setShowLogin(true)}
          >Login</Button>{' '}
          <Button
           variant="secondary" 
           id="button-register"
           onClick={()=>setShowRegister(true)}
           >Register</Button>{' '}
        </Navbar.Collapse>
      </Container>
      <ModalLogin setShowLogin={setShowLogin} showLogin={showLogin} setShowRegister={setShowRegister}/>
      <ModalRegister setShowRegister={setShowRegister} showRegister={showRegister} setShowLogin={setShowLogin}/>
    </Navbar>
    )
}

export default NavbarHeader;