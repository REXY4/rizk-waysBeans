import React,{useContext, useRef, useState, useEffect} from "react";
import {Form, FloatingLabel, Image, Button}from 'react-bootstrap';
import Attachment from "../assets/images/atthacment.png"
import { Api } from "../config/api";
import { UserContext } from "../context/useContenxt";
import {useParams} from "react-router-dom";

const FormEdditData = ({setMessage,setAlertMessage}) => {
  const inputRef = useRef(null);
  const [state, dispatch] = useContext(UserContext)
  const [click, setClick] = useState(false);
  const [product, setProduct] = useState([]);
  const [messageAlert, setMessageAlert] = useState(false);
let params = useParams();
  
  const [form, setForm] = useState({
    name : null,
    stock :null,
    price : null,
    desc : null,
    idUser : null,
    image : null,
  })
  const {name, stock, price, desc, image } = form;
  const handleUpload = () => {
    inputRef.current?.click();
  };

  const onChange = (e) =>{
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })
  }
  
  const addProduct = async (e)=>{
    try{
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
      const formData = new FormData();
      formData.append("image", image[0], image[0].filename);
      formData.append("name", name );
      formData.append("stock", stock );
      formData.append("price", price );
      formData.append("desc", desc);
    //   formData.append("idUser", state.user.id );
      const response = await Api.patch("/product/"+params.id, formData, config);
      console.log(response.data)
      if(response.data.status === 'success'){
        await setMessage("Success Add Product");
        await setAlertMessage(true);
      }
    }catch(error){
      console.log(error);
    }
  }
  // console.log("ini image",image[0].name)
  

  const loadDataProduct = async ()=>{
      try{
          const response = await Api.get(`/product/${params.id}`);
          setProduct(response.data.data.product);
      }catch(error){
          console.log(error);
      }
  }

  useEffect(()=>{
      loadDataProduct()
  },[])

  return (
    <Form style={{
      width : "472px"
    }}>
       <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control 
        type="text"
         placeholder="Name" 
         id="inputAddData"
         name="name"
         onChange={(e)=>onChange(e)}
         />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control 
        type="number" 
        placeholder="Stock" 
        id="inputAddData"
        name="stock"
        onChange={(e)=>onChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Price"
         name="price"
         onChange={(e)=>onChange(e)} 
        id="inputAddData"/>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Description Product">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          id="inputAddData"
          name="desc"
          onChange={(e)=>onChange(e)}
        />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="mt-4 mb-5">
      <div className="d-flex">
       <Form.Control disabled 
       type="text"
        placeholder="Photo Product"
        value={!image ? "Photo Product" : image[0].name}
        id="inputAddData" 
       style={{
          width : "190px",
        }}/>
       
          <Image 
          onClick={handleUpload}
          onMouseEnter={()=>setClick(true)}
          onMouseLeave={()=>setClick(false)}
          src={Attachment}
          style={{
            position : "relative",
            right : "30px",
            marginTop : "10px",
            width: "18.75px",
            height : "30px",
            cursor : "pointer",
            opacity : click ?  "0.6" : ""
          }} 
          />
      </div>  
      <input ref={inputRef} name="image" onChangeCapture={(e)=>onChange(e)}  type="file" className="d-none"  style={{
            // position : "relative",
            // bottom : "50px"
          }}/> 
      </Form.Group>
      <div className="d-flex justify-content-center"> 
          <Button
          onClick={addProduct}
           id="buttonAddChart" 
           style={{
            width : '260px'
          }}>
              Edit Product
          </Button>
          </div>
    </Form>
  );
}

export default FormEdditData;