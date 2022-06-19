import React,{useContext, useState, useEffect} from "react";
import { 
    Navbar,
    Container,
    Button,
    Image
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "../../styles/navigation.css"
import logo from "../../assets/Logo.svg";
import ModalLogin from "../modals/ModalLogin";
import ModalRegister from "../modals/ModalRegister";
import Keranjang from "../../assets/images/keranjang.svg"
import ProfilePicture from "../../assets/images/profilePicture.png";
import UserIcon from "../../assets/images/userIcon.svg";
import ChatIcon from "../../assets/images/chatIcon.svg";
import LogoutIcon from "../../assets/images/logoutIcon.svg";
import Polygon from "../../assets/images/polygon.svg";
import ToastRegister from "../modals/Toas";
import ProductAdd from '../../assets/images/addProduct.svg';
import { UserContext } from "../../context/useContenxt";
import { Api } from "../../config/api";

const NavbarHeader = () =>{
  const [state, dispatch] = useContext(UserContext);

  const [showLogin,setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [keranjangHover, setKeranjangHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [messageAuths, setMessageAuths] = useState("");
  const [openAlertRegister, setOpenAlertRegister] = useState(false);
  
  const [ulProfileHover, setUlProfileHover] = useState(false);
  const [ulChatHover, setUlChatHover] = useState(false);
  const [ulLogoutHover, setUlLogoutHover] = useState(false);
  const [countCart, setCountCart] = useState([]);
  
  const navigate = useNavigate();
  const handleLogout = async () =>{
   await dispatch({
      type : "LOGOUT",
    });

    await navigate("/")
  }

  const loadCart = async () =>{
    try{
      const response = await Api.get("/carts");
      setCountCart(response.data.data.user.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    loadCart()
  },[]);
  
    return(
        <Navbar className="bodyNav" fixed="top">
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
        {state.isLogin ? 
        (
          <>
          {state.user.status === "customer" ? 
          <div>
            <span className="badgeKeranjang">
              {countCart.length}
            </span>
            <Image
            onMouseLeave={()=>setKeranjangHover(false)} 
            onMouseEnter={()=>setKeranjangHover(true)}
            onClick={()=>navigate("/cart")}
             width="35px"
             height="35px"
            src={Keranjang}
            style={{
              cursor : "pointer",
              opacity : keranjangHover ? '0.6' : ""
            }}
            alt="keranjang"/>
           </div>
           : <></>}
           <div>
           <Image
           onMouseLeave={()=>setProfileHover(false)}
           onMouseEnter={()=>setProfileHover(true)} 
           onClick={()=>{
            if(showDropDown){
              setShowDropDown(false)
            }else{
              setShowDropDown(true)
            }
          }}
           style={{
            width : "60px",
            height : "60px",
            borderRadius : "50%",
            marginLeft : "20px",
            cursor : "pointer",
            opacity : profileHover ? "0.6" : ""
           }}
           src={ProfilePicture}/>
           </div>
           <div
           onMouseLeave={()=>setShowDropDown(false)} 
           style={{
            display : showDropDown ? "" : "none",
            position : "absolute",
            background : "#FFFFFF",
            position : "absolute",
            top : "80px",
            width : "293px",
            padding : "20px",
            zIndex : 2,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 20px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
           }}>
            <div style={{
              position : "absolute",
              bottom : "260px",
              marginLeft : "210px"
            }}>
              <Image 
              src={Polygon}
              />
            </div>
              <ul style={{
                listStyleType: "none"
              }}>
                <li 
                className="mb-3"
                onMouseLeave={()=>setUlProfileHover(false)}
                onMouseEnter={()=>setUlProfileHover(true)}
                onClick={()=>{
                  if(state.user.status === "customer"){
                    navigate("/profile")
                  }else{
                    navigate("/add/product");
                  }
                }}
                style={{
                  cursor : "pointer",
                  opacity : ulProfileHover ? "0.6" : ""
                }}
                >
                  <Image 
                  src={state.user.status === "customer" ? UserIcon : ProductAdd}
                  alt="user"
                  />
                  <span className="listText">{state.user.status === "customer" ?  "Profile" : "Add Product"}</span>
                </li>
                <hr style={{
                  height : "2px"
                }} />
                <li className="mb-3"
                 onMouseLeave={()=>setUlChatHover(false)}
                 onMouseEnter={()=>setUlChatHover(true)}
                 style={{
                  cursor : "pointer",
                  opacity : ulChatHover ? "0.6" : ""
                }}>
                  <Image 
                  
                  //  onClick={()=>navigate("/profile")}
                  src={ChatIcon}
                  alt="user"
                 
                  />
                  <span className="listText">Complain</span>
                </li> 
                <hr style={{
                  height : "2px"
                }} />
                <li className="pb-3 pt-3"
                   onMouseLeave={()=>setUlLogoutHover(false)}
                   onMouseEnter={()=>setUlLogoutHover(true)}
                   onClick={()=>handleLogout()}
                   style={{
                    cursor : "pointer",
                    opacity : ulLogoutHover ? "0.6" : ""
                  }}
                   >
                  <Image 
                  src={LogoutIcon}
                  alt="user"
                  />
                  <span className="listText">Logout</span>
                </li>
              </ul>
           </div>
          </>
        )
        :
        (
          <>
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
           </>
        )
        }  
        </Navbar.Collapse>
      </Container>
      {openAlertRegister ? <ToastRegister message={messageAuths} closeToast={setOpenAlertRegister}/> : <></>}
      <ModalLogin setShowLogin={setShowLogin} showLogin={showLogin} setShowRegister={setShowRegister}/>
      <ModalRegister openAlert={setOpenAlertRegister} setMessageAuths={setMessageAuths} setShowRegister={setShowRegister}  showRegister={showRegister} setShowLogin={setShowLogin}/>
    </Navbar>
    )
}

export default NavbarHeader;