import React,{useEffect, useState} from "react";
import {Row, Col, Image, Container} from "react-bootstrap";
import Products from "../assets/images/products.png";
import FormAddData from "../components/FormAddData";
import ToastRegister from "../components/modals/Toas";
import ToastProduct from "../components/modals/ToastProduct";
import {useParams, } from "react-router-dom";
import { Api } from "../config/api";
import FormEdditData from "../components/FormEditData";

const EditProduct = () =>{
    const [message, setMessage] = useState("");
    const [product, setProduct] = useState([]);
    const [messageAlert, setMessageAlert] = useState(false);
    let params = useParams();
    const loadDataProduct = async ()=>{
        try{
            const response = await Api.get(`/product/${params.id}`);
            setProduct(response.data.data.product);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        loadDataProduct()
    },[])
    return(
        <Container>
        <Row className="mt-5">
            <Row>
                <Col>
                <h1 className="titleHeaderTransactions mb-5">
                    Edit Product
                </h1>
                <div className="">
                 <FormEdditData  setMessage={setMessage} setAlertMessage={setMessageAlert}/> 
                </div>
                </Col>
                <Col>
                    <Image 
                    src={product.image}
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

export default EditProduct;