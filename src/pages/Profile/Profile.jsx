import React from 'react'
import './Profile.css'
import { useLocation, Navigate } from 'react-router-dom'

const Profile = () => {
    const {state} = useLocation()


    if(state?.role === 'admin') {
        return <Navigate to='/profile/admin' state={state}/>
    }
    // console.log(location);
  return (
    <div>
        <h2>Profile</h2>
        <h5>{state?.name}</h5>
    </div>
  )
}

export default Profile