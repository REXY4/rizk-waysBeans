import React, {useState} from "react";
import {Row, Col, Container, Image, Button} from "react-bootstrap";
import "../styles/cart.css";
import Product from "../assets/images/products.png"
import Plus from "../assets/images/plus.svg";
import Minus  from "../assets/images/minus.svg";
import Delete from "../assets/images/delete.svg";

const CartPages = () =>{
    const [minusButton, setMinusButton] = useState(false);
    const [plusButton, setPlusButton] = useState(false);
    const [countValue, setCountValue] = useState(0);

    const handleIncrement = () =>{
        setCountValue(countValue + 1);
    }

    const handleDecrement = () => {
        if(countValue === 0){
            setCountValue(0);
        }else{
            setCountValue(countValue - 1)
        }
    }
    return(
        <Container>
        <Row className="mt-4">
            <Col className="col-md-8">
                <h1 className="titleHeaderCart mb-4">
                    My Cart
                </h1>
                <p className="paragrafHeaderCart">
                    Review Your Order
                </p>
                <hr style={{
                    background : "#613D2B"
                }}/>
                <Row>
                    <Col className="col-sm-2">
                        <Image
                            src={Product} 
                            style={{
                                width: "80px",
                                height: "80px",
                            }}
                        />
                    </Col>
                    <Col className="col-sm-7">
                            <h3 className="titleCart mb-3 mt-2">
                                 GUETEMALA Beans
                            </h3>
                            <div>
                                <Image
                                onMouseLeave={()=>setMinusButton(false)}
                                onMouseEnter={()=>setMinusButton(true)} 
                                onClick={handleDecrement}
                                src={Minus} 
                                alt="minus"
                                style={{
                                    cursor : "pointer",
                                    width : "16px",
                                    marginRight : "10px",
                                    opacity : minusButton ?  "0.6" : ""
                                }}/>
                                <span className="valueCart"> {countValue} </span>
                                <Image 
                                onMouseLeave={()=>setPlusButton(false)}
                                onMouseEnter={()=>setPlusButton(true)}
                                onClick={handleIncrement}
                                src={Plus} 
                                style={{
                                    cursor : "pointer",
                                    width : "16px",
                                    marginLeft : "10px",
                                    opacity : plusButton ?  "0.6" : ""
                                }}
                                alt="plus"/>
                            </div>
                    </Col>
                    <Col>   
                           <p className="cartPrice mt-2 text-end">Rp.300.900</p>
                           <div style={{
                            display : "flex",
                            justifyContent : "flex-end"
                           }}>
                           <Image 
                            src={Delete}
                            style={{
                                width : "16.67px",
                                height : "20px"
                            }}
                           />   
                           </div>  
                    </Col>
                </Row>
                <hr style={{
                    background : "#613D2B"
                }}/>
            </Col>
            <Col>
            <div style={{
                width : "320px"
            }}>
                <hr style={{
                    background : "#000000",
                    borderTop : "2px solid black",
                    marginTop : "100px"
                }}/>
                <div className="d-flex justify-content-between">
                    <p className="cartPrice">Subtotal</p>
                    <p className="cartPrice">300.900</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="cartPrice">Qty</p>
                    <p className="cartPrice">2</p>
                </div>
                <hr style={{
                    background : "#000000",
                    borderTop : "2px solid black",
                }}/>
                 <div className="d-flex justify-content-between">
                    <p className="cartPriceTwo">Total</p>
                    <p className="cartPriceTwo">300.009</p>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <Button variant="danger" id="buttonCartPay">
                        Pay
                    </Button>
                </div>
            </div>    
            </Col>
        </Row>
        </Container>
    )
}

export default CartPages;