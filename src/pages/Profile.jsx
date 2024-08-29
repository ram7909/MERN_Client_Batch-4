import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Profile = () => {
    const {profile} = useContext(ProductContext)
  return (
    <>
        <h1>
            {profile.name}
            <br />
            {profile.email}
        </h1>
    </>
  )
}

export default Profile