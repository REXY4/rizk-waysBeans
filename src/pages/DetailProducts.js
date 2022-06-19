import React,{} from "react";
import {Row, Col, Image, Button,Container} from "react-bootstrap";
import "../styles/detailProduct.css"
import Products from "../assets/images/products.png";

const DetailProducts = () =>{ 
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
                src={Products}
                />
            </Col>
            <Col >
            <div style={{
                width : "544px",
                marginTop : "20px"
            }}>
                <h1 className="title">
                   GUETEMALA Beans
                </h1>
                <p className="stock mb-5">
                Stock : 500
                </p>
                <p className="deskripsi mb-4">
                Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, 
                meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul 
                pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
                </p>
                <div>
                    <p className="price mb-5">
                    Rp.300.900
                    </p>
                </div>
                <Button variant="danger" id="buttonAddChart">
                        Add Cart
                </Button>
                </div>
            </Col>
        </Row>
        </Container>
    )
}

export default DetailProducts;