import React,{ useContext , useEffect, useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import {Row, Col, Image, Button,Container} from "react-bootstrap";
import "../styles/detailProduct.css"
import Products from "../assets/images/products.png";
import { UserContext } from "../context/useContenxt";
import { Api } from "../config/api";
import { idr } from "../utils/convertToRupiah";
import ToastProduct from "../components/modals/ToastProduct";

const DetailProducts = () =>{ 
    const [state, dispatch] = useContext(UserContext);
    const [product, setProduct] = useState([]);
    const [messageAlert, setMessageAlert] = useState(false);
    const [message, setMessage] = useState("");
    const params = useParams();
    let navigate = useNavigate()
    const loadDataProduct = async ()=>{
        try{
            const response = await Api.get(`/product/${params.id}`);
            setProduct(response.data.data.product);
        }catch(error){
            console.log(error);
        }
    }
    const deleteProduct = async ()=>{
        try{
            const response = await Api.delete(`/product/${params.id}`);
            await setMessage(`Delete ${product.name} success` );
            await setMessageAlert(true);
        }catch(error){
            console.log(error);
        }
    }

    const addCart = async ()=>{
        try{
            const config = {
                headers : {
                    "content-type" : "application/json"
                }
            }
            const body = JSON.stringify({
                idProduct:params.id,
                idUser: state.user.id,
            })
            const response = await Api.post(`/cart`, body, config);
            console.log(response.data)
            await setMessage(`add cart ${product.name} success` );
            await setMessageAlert(true);
        }catch(error){
            console.log(error);
        }
    }

   
    
    useEffect(()=>{
        loadDataProduct();
    },[]);

    
    return(
        <Container>
        <Row style={{
            marginTop : "50px"
        }}>
            <Col>
                <Image 
                style={{
                    width : "463px",
                    height : "555px"
                }}
                src={product.image}
                />
            </Col>
            <Col >
            <div style={{
                width : "544px",
                marginTop : "20px"
            }}>
                <h1 className="title">
                    {product.name}
                </h1>
                <p className="stock mb-5">
                Stock : {product.stock}
                </p>
                <p className="deskripsi mb-4" style={{
                        height:  "200px"
                    }}>
                    {product.desc}
               </p>
                <div>
                    <p className="price mb-5" >
                    {idr(product.price)}
                    </p>
                </div>
                <Button
                onClick={()=>{
                    if(state.user.status === "admin"){
                        navigate("/edit/product/"+params.id)
                    }else{
                        addCart()
                    }
                }}
                 variant="danger" id="buttonAddChart">
                        {state.user.status === "customer" ? "Add Cart" : "Edit Product"}
                </Button>
                </div>
                <div className="mt-3">
                    {state.user.status === "admin" ?
                <Button
                onClick={deleteProduct}
                 variant="danger" style={{
                    width : "540px"
                }}>
                        Delete
                </Button>
                :
                <></>
                }
                </div>
            </Col>
        </Row>
        {messageAlert ? <ToastProduct message={message} closeToast={setMessageAlert}/> : <></>}
        </Container>
    )
}

export default DetailProducts;