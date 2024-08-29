import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const Navbar = () => {
  const { isAuthenticate, setIsAuthenticate ,setToken} = useContext(ProductContext)
  const location = useLocation();
  const navigate = useNavigate()
  return (
    <div className="nav-bar p-2" style={{ borderBottom: '2px solid yellow' }}>
      <div className="d-flex align-items-center px-5" style={{ justifyContent: 'space-between' }}>
        <div className="left">
          <Link to={"/"} style={{ fontSize: '25px' }}>Shopping Cart</Link>
        </div>
        <div className="right">
          {isAuthenticate && (
            <Link to={"/addproduct"} className="btn btn-primary mx-2">
              Add Product
            </Link>
          )}
          {location.pathname != '/admin' && (
            <>
              {!isAuthenticate && (
                <>
                  <Link to={"/login"} className="btn btn-secondary mx-2">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-success mx-2">
                    Register
                  </Link>
                </>
              )}

              {isAuthenticate && (
                <>
                  <div className="btn btn-danger mx-2" onClick={()=>{
                    localStorage.removeItem('Token')
                    setIsAuthenticate(false)
                    setToken("")
                    alert("Logout Successfull")
                    navigate('/')
                    }}>LogOut</div>
                  <Link to={"/profile"} className="btn btn-info mx-2">
                    Profile
                  </Link>
                </>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;