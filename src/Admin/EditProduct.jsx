import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const EditProduct = () => {
    const { addProduct, url, reload, setReload } = useContext(ProductContext)
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        qty: '',
        img: '',
        category: ''
    })

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await axios.get(`${url}/products/${id}`);
            let product = api.data.product[0]
            if (product) {
                setFormData({
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    qty: product.qty,
                    img: product.img,
                    category: product.category
                })
            }

        };

        fetchDataFromAPI();
    }, [id, url])



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const { title, description, price, qty, img, category } = formData

    const editProduct = async (title, description, price, qty, img, category) => {
        const api = await axios.put(`${url}/products/${id}`, {
            title,
            description,
            price,
            qty,
            img,
            category
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setReload(!reload)

        return api.data
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await editProduct(title, description, price, qty, img, category)



        alert(result.message)
        if (result.success) {
            setFormData({
                title: '',
                description: '',
                price: '',
                qty: '',
                img: '',
                category: ''
            })
            navigate('/admin')
        }

    }

    return (
        <>
            <div className="container" style={{ height: '100vh' }}>
                <form onSubmit={submitHandler} className="container my-3 p-4" style={{
                    width: '600px', border: '1px solid blue', borderRadius: '10px'
                }}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            value={formData.title}
                            name='title'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            className="form-control"
                            type="text"
                            value={formData.description}
                            name='description'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            className="form-control"
                            type="number"
                            value={formData.price}
                            name='price'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            className="form-control"
                            type="number"
                            value={formData.qty}
                            name='qty'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">image</label>
                        <input
                            className="form-control"
                            type="text"
                            value={formData.img}
                            name='img'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">category</label>
                        <select className="form-select form-select-lg mb-3 bg-black text-light" aria-label="Large select example" value={formData.category} name='category' onChange={handleChange} required>
                            <option value="" disabled>Select Category</option>
                            <option value="mobile">Mobile</option>
                            <option value="tablet">Tablet</option>
                            <option value="laptop">Laptop</option>
                        </select>
                    </div>
                    <div className='d-grid col-6 mx-auto'>
                        <button className='btn btn-outline-primary'>Edit Product</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProduct