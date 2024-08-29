import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const { products, deleteProduct } = useContext(ProductContext);
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="my-5">
                    {products.map((e) =>
                        <div key={e._id} className="my-2 text-center">
                            <div className="bg-dark text-light p-2" style={{
                                width: '60vw',
                                border: '1px solid yellow',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ width: '250px' }}>
                                    <div className="img" style={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img src={e.img} className="p-2 card-img-top" height={50} style={{
                                            width: '50px'
                                        }} />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">{e.title}</h6>
                                        <p className="card-text">{e.price} ₹</p>
                                    </div>
                                </div>
                                <div className="btn-">

                                    <Link to={`/admin/edit/${e._id}`} className="btn btn-outline-warning mx-3" >Edit</Link>

                                    <button className="btn btn-danger mx-2"
                                        onClick={async () => {
                                            if (confirm('Are You Sure You Want To Delete')) {
                                                const result = await deleteProduct(e._id);
                                                alert(result.message)
                                            }
                                        }}>Delete</button>
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