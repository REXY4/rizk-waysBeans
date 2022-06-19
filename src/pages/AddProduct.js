import React,{} from "react";
import {Row, Col, Image, Container} from "react-bootstrap";
import Products from "../assets/images/products.png";
import FormAddData from "../components/FormAddData";

const AddProduct = () =>{
    return(
        <Container>
        <Row className="mt-5">
            <Row>
                <Col>
                <h1 className="titleHeaderTransactions mb-5">
                    Add Product
                </h1>
                <div className="">
                <FormAddData/>
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
        </Container>
    )
}

export default AddProduct;