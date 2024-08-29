import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="container">
        <div className="row my-5">
          {products.map((e) =>
            <div key={e._id} className="my-3 col-md-4">
              <div className="card bg-dark text-light" style={{
                 width: '18rem',
                 border:'2px solid yellow'
                  }}>
                <Link to={`/product/${e._id}`} className="img" style={{
                  display:"flex",
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                  <img src={e.img} className="p-2 card-img-top" height={300} style={{ width: '200px',
                    borderRadius:'20px'
                   }} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.price} ₹</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default Product;