import {Card , Row,Col,Image, Button} from "react-bootstrap";
import IconTransactions from "../../assets/images/iconTransactions.svg";
import QrCode from "../../assets/images/qrCode.svg";

const CardTransactions = ({
    image,
    title,
    date,
    price,
    qty,
    status,
    subTotal,
}) =>{
    
    return(
        <Card className="cardTransactionProifile">
            <Card.Body>
                <Row>
                    <Col className="col-md-2 titleCardProfile" style={{
                        marginRight : "10px"
                    }}>
                        <Image 
                        src={image}
                        alt={title}
                        style={{
                            width: "80px",
                            height: "120px",
                        }}/>
                    </Col>
                    <Col>
                        <h1 className="titleHeaderTransactions mt-2" style={{
                            fontSize : "14px"
                        }}>
                            {title}
                        </h1>
                        <p className="titleTime mb-3">
                           <stroong>Saturday , 5 March 2020</stroong>
                        </p>
                        <p className="priceProfileCard">
                            Price : {price}<br/>
                            Qty : {qty}
                        </p>
                        <p className="subTotalProfileCard">
                            Sub Total : 601.800
                        </p>
                    </Col>
                    <Col>  
                    <div className="mb-3 d-flex justify-content-center mt-2">
                    <Image 
                        src={IconTransactions}
                        alt={title}
                        style={{
                            width: "73px",
                            height: "22px",
                        }}/>
                    </div>
                    <div className="d-flex justify-content-center">    
                        <Image 
                        src={QrCode}
                        alt={title}
                        style={{
                            width: "50px",
                            height: "50px",
                        }}/>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button id="buttonApprove" style={{
                            background : status === "Success" ? "rgb(143, 255, 0, 0.3)" : "rgb(255,153,0, 0.3)"
                        }}>
                            <span
                            className="textButtonProfileCard" style={{
                                color : status === "Pending" ? "#FF9900" : "#FFFFFF"
                            }}>
                                {status === "Pending" ? "Waiting Approve" : "Success"}
                            </span>
                        </Button>
                    </div>    
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardTransactions;