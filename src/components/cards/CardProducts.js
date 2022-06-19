import React, {useState} from "react";
import {Card,} from "react-bootstrap";
import "../../styles/card.css";

const CardProducts = ({image, title}) =>{
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
                    Rp.299.900 <br/>
                    Stock : 99
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProducts;