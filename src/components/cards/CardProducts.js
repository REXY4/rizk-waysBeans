import React, {useState} from "react";
import {Card,} from "react-bootstrap";
import "../../styles/card.css";
import {idr} from "../../utils/convertToRupiah";

const CardProducts = ({image, title, price, stock}) =>{
    const [mouseOn, setMouseOn ] = useState(false);
    return(
        <Card
        onMouseLeave={()=>setMouseOn(false)}
        onMouseEnter={()=>setMouseOn(true)} 
        style={{
            // height : "410px",
            cursor : "pointer",
            width : "241px",
            opacity : mouseOn ? "0.6" : ""
        }}>
            <Card.Img src={image}
            style={{
                width : "100%",
                height : "312px",
            }}
            alt="image"/>
            <Card.Body>
                <Card.Title className="titleCard">
                    {title}
                </Card.Title>
                <Card.Text className="deskripsiCard">
                    {idr(price)}<br/>
                    Stock : {stock}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProducts;