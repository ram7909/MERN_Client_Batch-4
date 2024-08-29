import React from "react";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import AdminProduct from "./Admin/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import EditProduct from "./Admin/EditProduct";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/addproduct" element={<AddProduct />}/>
        <Route path='/admin' element={<AdminProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin/edit/:id' element={<EditProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;