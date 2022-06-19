import {Table, Button, Image} from 'react-bootstrap';
import Checklis from "../assets/images/checklis.png";
import Cancel from "../assets/images/cancel.png";


function TabbleData({dataTransactions}) {
  return (
    <Table  bordered hover variant="light" >
      <thead >
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Post Code</th>
          <th>Products Order</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataTransactions.map((item, index)=>{
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.postCode}</td>
                    <td>{item.productOrder}</td>
                    <td>{item.status}</td>
                    <td className='d-flex justify-content-center'>
                        {
                            item.status === "Pending" ? 
                            (
                                <div className='d-flex'>
                                    <Button variant="danger" style={{
                                        background: "#FF0742",
                                        borderRadius: "5px",
                                        width: "80px",
                                        height: "20px",
                                        fontFamily: 'Avenir',
                                        fontStyle: "normal",
                                        fontWeight: "900",
                                        fontSize: "13px",
                                        lineHeight: "22px",
                                        alignItems: "center",
                                        color: "#FFFFFF",
                                        marginRight : "10px"
                                    }}>
                                        <span style={{
                                             position : "relative",
                                             bottom  :"8px"
                                        }}>
                                            Cancel
                                        </span>
                                    </Button> 
                                    <Button variant="success" style={{
                                        background: "#0ACF83",
                                        borderRadius: "5px",
                                        width: "80px",
                                        height: "20px",
                                        fontFamily: 'Avenir',
                                        fontStyle: "normal",
                                        fontWeight: "900",
                                        fontSize: "13px",
                                        lineHeight: "22px",
                                        alignItems: "center",
                                        color: "#FFFFFF",
                                       
                                    }}>
                                        <span style={{
                                             position : "relative",
                                             bottom  :"8px"
                                        }}>
                                            Approve
                                        </span>
                                    </Button> 
                                </div>
                            ) 
                            :
                            item.status === "Success" ? 
                            (
                                <div>
                                    <Image 
                                    src={Checklis}
                                    />
                                </div>
                            ) 
                            : 
                            (
                                <div>
                                    <Image 
                                    src={Cancel}
                                    />
                                </div>
                            )
                        }
                    </td>
                  </tr>
                )
        }
)}
      </tbody>
    </Table>
  );
}

export default TabbleData;