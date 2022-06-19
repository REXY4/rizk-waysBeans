import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailProducts from "../pages/DetailProducts";
import IncomeTransactions from "../pages/IncomeTransactions";
import AddProduct from "../pages/AddProduct";
import ProfilePages from "../pages/ProfilePages";
import CartPages from "../pages/CartPages";

const MainRoutes = () =>{
    return(
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<DetailProducts/>}/> 
          <Route path="/incometransactions" element={<IncomeTransactions/>}/>
          <Route path="/add/product" element={<AddProduct/>}/>  
          <Route path="/profile" element={<ProfilePages/>}/> 
          <Route path="/cart" element={<CartPages/>}/> 
       </Routes>
    );
}


export default MainRoutes