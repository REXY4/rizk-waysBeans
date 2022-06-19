import React,{ useState } from "react";
import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Jumbroton from "../assets/images/Jumbotron.png";
import CardProducts from "../components/cards/CardProducts";
import Products from "../assets/images/products.png"



const Home = () =>{
    let navigate = useNavigate();
    const data = [
        {
            id : 1,
            title : "RWANDA Beans",
            image  : Products,
        },
        {
            id : 2,
            title : "RWANDA Beans",
            image  : Products,
        },
        {
            id : 3,
            title : "RWANDA Beans",
            image  : Products,
        },
        {
            id : 4,
            title : "RWANDA Beans",
            image  : Products,
        },
    ]
    return(
        <Row>
            <Row className="mb-5">
                <Col className="col-12 d-flex justify-content-center">
                    <Image 
                    src={Jumbroton}/>
                </Col>
            </Row>
            <Row >
                {data.map((item, index)=>{
                    return(
                        <Col className="mb-5" key={index} onClick={()=>navigate(`/detail`)}>
                                <CardProducts 
                                image={item.image}
                                title={item.title}/>
                        </Col>
                    )
                })}
            </Row>
        </Row>
    )
}

export default Home;