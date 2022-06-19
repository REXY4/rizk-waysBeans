import React,{useState} from "react";
import {Row, Col, Image, Container} from "react-bootstrap";
import Products from "../assets/images/products.png";
import FormAddData from "../components/FormAddData";
import ToastRegister from "../components/modals/Toas";
import ToastProduct from "../components/modals/ToastProduct";

const AddProduct = () =>{
    const [message, setMessage] = useState("");
    const [messageAlert, setMessageAlert] = useState(false);

    return(
        <Container>
        <Row className="mt-5">
            <Row>
                <Col>
                <h1 className="titleHeaderTransactions mb-5">
                    Add Product
                </h1>
                <div className="">
                <FormAddData setMessage={setMessage} setAlertMessage={setMessageAlert}/>
                </div>
                </Col>
                <Col>
                    <Image 
                    src={Products}
                    style={{
                        width : "436px",
                        height : "555px",
                    }}
                    />
                </Col>
            </Row>
        </Row>
        {messageAlert ? <ToastProduct message={message} closeToast={setMessageAlert} /> : <></>}
        </Container>
    )
}

export default AddProduct;