import React from "react";
import "../styles/incomeTransactions.css";
import {Row, Col} from "react-bootstrap";
import TabbleData from "../components/tabble";

const IncomeTransactions = () =>{
    const dataTransactions = [
        {
            id : 1,
            name : "Sugeng No Pants",
            address : "Cileungsi",
            postCode : "16820",
            productOrder : "RWANDA Beans",
            status : "Pending",
        },
        {
            id : 2,
            name : "Sugeng No Pants",
            address : "Cileungsi",
            postCode : "16820",
            productOrder : "RWANDA Beans",
            status : "Success",
        },
        {
            id : 3,
            name : "Sugeng No Pants",
            address : "Cileungsi",
            postCode : "16820",
            productOrder : "RWANDA Beans",
            status : "Cancel",
        }
    ]
    return(
        <Row>
            <Row className="mb-5 mt-5">
                <Col>
                    <h1 className="titleHeaderTransactions">
                    Income transaction
                    </h1>
                </Col>
            </Row>
            <Row>
            <Col>
                <TabbleData dataTransactions={dataTransactions}/>
            </Col>
            </Row>
        </Row>
    )
}

export default IncomeTransactions;