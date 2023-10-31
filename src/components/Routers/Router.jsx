import { Route, Routes } from "react-router-dom"
import Home from './../../pages/Home';
import Product from './../../pages/Product';
import About from './../../pages/About';
import Contact from './../../pages/Contact';
import Login from './../../pages/Login';
import Singup from './../../pages/Singup';
import SingleProduct from "../../pages/SingleProduct";
import Cart from "../../pages/Cart";
import ErrorPage from './../../pages/ErrorPage';


const Router = () => {
  return (
    <div>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="singup" element={<Singup/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
    </div>
  )
}

export default Router