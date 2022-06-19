import {Row, Col, Image} from "react-bootstrap";
import "../styles/profile.css";
import Profile from "../assets/images/profile.png";
import CardTransactions from "../components/cards/CardTransactions";
import Product from "../assets/images/products.png";

const ProfilePages = () =>{

    const dataProfileTransactions = [
        {
            id :1,
            image : Product,
            title : "GUETEMALA Beans",
            date : "Saturday, 5 March 2020",
            price : 300.900,
            qty : 2,
            status : "Pending",
            subTotal : 601.800,
        },
        {
            id : 2,
            image : Product,
            title : "GUETEMALA",
            date : "Saturday, 5 March 2020",
            price : 300.900,
            qty : 3,
            status : "Success",
            subTotal : 601.800,
        }
    ];

    return(
        <Row className="mt-5">
            <Col>
                <h1 className="titleHeaderTransactions mb-5">
                    My Profile
                </h1>
                <Row>
                <Col className="col-md-4">    
                <Image 
                src={Profile}
                alt="profile"
                style={{
                    width : '180px',
                    height : "221.79px"
                }}
                />
                </Col>
                <Col>
                    <div>
                        <h3 className="labelProfile">Full Name</h3>
                        <p className="valueProfile">Rizki Ganteng</p>
                    </div>
                    <div>
                        <h3 className="labelProfile">Email</h3>
                        <p className="valueProfile">muhammadrzki@gmail.com</p>
                    </div>
                </Col>
                </Row>
            </Col>
            <Col>
                <h1 className="titleHeaderTransactions mb-5">
                    My Transactions
                </h1>
                <div>
                    {dataProfileTransactions.map((item, index)=>{
                        
                        return(
                            <Row key={index} className="mb-3">
                                <CardTransactions 
                                image={item.image}
                                title={item.title}
                                date={item.date}
                                price={item.price}
                                qty={item.qty}
                                subTotal={item.subTotal}
                                status={item.status}
                                />
                            </Row>
                        )
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default ProfilePages;