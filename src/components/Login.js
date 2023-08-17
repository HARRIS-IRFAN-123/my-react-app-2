import React, { useState } from 'react'
import {toast} from 'react-toastify'
import LoginForm from './LoginForm'

const Login = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("");
const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        let res = ({email,password})
        console.log('LOGIN RESPONSE',res)    
    } catch (error) {
        console.log(error)
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data);
    }
  }
        
    }
  return (
    <>
    <div className='container-fluid p-5 text-center'>
      <h1>This Is Login Page</h1>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3'></div>
    <LoginForm
    handleSubmit = {handleSubmit}
    email = {email}
    setEmail = {setEmail}
    password = {password}
    setPassword = {setPassword}
    />
    
    </div>
    </div>
    </>
  )
}

export default Login
