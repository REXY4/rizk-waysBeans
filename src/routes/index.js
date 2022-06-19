import { Routes, Route , Navigate, Outlet,} from "react-router-dom";
import Home from "../pages/Home";
import DetailProducts from "../pages/DetailProducts";
import IncomeTransactions from "../pages/IncomeTransactions";
import AddProduct from "../pages/AddProduct";
import ProfilePages from "../pages/ProfilePages";
import CartPages from "../pages/CartPages";
import { useContext } from "react";
import { UserContext } from "../context/useContenxt";
import EditProduct from "../pages/EdditProduct";
//memberikan protecsi root
const ProtectedRoute = ({ children}) =>{
    if(!localStorage.token){
        return <Navigate to="/" replace />
    }else{
        return <Outlet/>
    }
}

const MainRoutes = () =>{
    const [state,] = useContext(UserContext);
    return(
        <Routes>
          <Route path="*" element={<Home/>}/>
          {/* protected root untuk mengurung root yang belum login ya sayang */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/detail/product/:id" element={<DetailProducts/>}/> 
          <Route path="/incometransactions" element={<IncomeTransactions/>}/>
          <Route path="/add/product" element={<AddProduct/>}/>  
          <Route path="/profile" element={<ProfilePages/>}/> 
          <Route path="/cart" element={<CartPages/>}/>
          <Route path="/edit/product/:id" element={<EditProduct/>}/>  
        </Route>
       </Routes>
    );
}


export default MainRoutes