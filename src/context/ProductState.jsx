import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'
const ProductState = (props) => {
    const url = "https://mern-api-batch-4.onrender.com/api";
    const [products, setProducts] = useState([])
    const [profile, setProfile] = useState({})
    const [reload, setReload] = useState(false)
    const [isAuthenticate, setIsAuthenticate] = useState(false)
    const [token, setToken] = useState("")
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await axios.get(`${url}/products/get`)
            setProducts(api.data.product)
        };
        fetchDataFromAPI();
    }, [reload])

    useEffect(() => {
        const tokenFromLocalStorage = localStorage.getItem("Token")
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage)
            setIsAuthenticate(true)
        }
        const fetchprofileFromAPI = async () => {
            const api = await axios.get(`${url}/user/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    auth: token
                }
            })
            console.log("user data", api.data);
            setProfile(api.data)
        };
        fetchprofileFromAPI();
    }, [token])



    // user register
    const register = async (name, email, phone, password) => {
        const api = await axios.post(`${url}/user/register`, {
            name,
            email,
            phone,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // setReload(!reload)
        return api.data
    }


    // user login
    const login = async (email, password) => {
        const api = await axios.post(`${url}/user/login`, {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // setReload(!reload)
        console.log("Login Data", api.data);
        if (api.data.token) {
            localStorage.setItem('Token', api.data.token)
            setIsAuthenticate(true)
            setToken(api.data.token)
        }
        return api.data
    }

    //


    // add product
    const addProduct = async (title, description, price, qty, img, category) => {
        const api = await axios.post(`${url}/products/add`, {
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


    // delete product by id
    const deleteProduct = async (id) => {
        const api = await axios.delete(`${url}/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setReload(!reload)

        return api.data
    }


    // edit product by id
    

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, register, login, isAuthenticate, setIsAuthenticate, setToken, profile, url,reload,setReload }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState