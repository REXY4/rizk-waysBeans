import React,{ useState, useEffect } from "react";
import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Jumbroton from "../assets/images/Jumbotron.png";
import CardProducts from "../components/cards/CardProducts";
import Products from "../assets/images/products.png"
import { Api } from "../config/api";



const Home = () =>{
    let navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const  loadData = async ()=>{
        try{
            const response = await Api.get("/products");
            setProduct(response.data.data.product)
        }catch(error){
            console.log(error);
        }
    }
    // const data = [
    //     {
    //         id : 1,
    //         title : "RWANDA Beans",
    //         image  : Products,
    //     },
    //     {
    //         id : 2,
    //         title : "RWANDA Beans",
    //         image  : Products,
    //     },
    //     {
    //         id : 3,
    //         title : "RWANDA Beans",
    //         image  : Products,
    //     },
    //     {
    //         id : 4,
    //         title : "RWANDA Beans",
    //         image  : Products,
    //     },
    // ]
    

    useEffect(()=>{
        loadData()
    },[]);
    return(
        <Row>
            <Row className="mb-5">
                <Col className="col-12 d-flex justify-content-center">
                    <Image 
                    src={Jumbroton}/>
                </Col>
            </Row>
            <Row >
                <div style={{
                    height : "440px",
                    overflow : "hidden"
                }}>
                <Col style={{
                    display : "flex",
                    width : "100%",
                    height : "500px",
                    overflow : "auto"
                }}>
                
                {product.map((item, index)=>{
                    return(
                        <div className="mb-5" key={index}
                        style={{marginRight : "30px"}}
                        onClick={()=>navigate(`/detail/product/${item.id}`)}>
                                <CardProducts 
                                image={item.image}
                                title={item.name}
                                stock={item.stock}
                                price={item.price}/>
                        </div>
                    )
                })}
                </Col>
                </div>
            </Row>
        </Row>
    )
}

export default Home;