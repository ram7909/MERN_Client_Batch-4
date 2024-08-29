import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { login } = useContext(ProductContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const {  email,  password } = formData

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log("Your Form Has Been Submitted...",formData);

        const result = await login( email,  password)
        alert(result.message)
        if (result.success) {
            setFormData({
              email: '',
              password: ''
            })
            navigate('/')
        }

    }

    return (
        <>
            <div className="container" style={{ height: '100vh' }}>
                <form onSubmit={submitHandler} className="container my-3 p-4" style={{
                    width: '600px', border: '1px solid blue', borderRadius: '10px'
                }}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={formData.email}
                            name='email'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={formData.password}
                            name='password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='d-grid col-6 mx-auto'>
                        <button className='btn btn-outline-primary'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login