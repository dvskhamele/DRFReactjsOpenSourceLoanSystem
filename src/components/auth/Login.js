import React from 'react'
import { useGlobalContext } from '../context'
import './auth.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {
      username,
      setusername,
      password,
      setpassword,
      showAlert,
      setisLoggedin,
      isLoggedin,
      setloginName,
    } = useGlobalContext() 
    // 
    let navigate = useNavigate()
    
    if(isLoggedin){
      navigate('/dashbaord')
    }
    // 
    const submitLogin = async(e) =>{
      const userData = {username,password}
      e.preventDefault()
      if(!username && !password){
         showAlert(true,'Fill the form ', 'danger')
      }
      else{
        
          try{
              const res = await axios.post(`https://c76d-203-189-248-200.in.ngrok.io/api/login/`, userData);
              console.log(res)
              if (res.data.succes) {
                setisLoggedin(true)
                   navigate("/dashboard");
                }
                else if(!res.data.error){
                  showAlert(true,`Invalid Auth`,'danger')
                }
          }
          catch(err){
              console.log(err)
              showAlert(true,`${err.message}`,'danger')
          }
          setusername('')
          setpassword('')
      }
  }
    // 
  return (
    <div className='formBox'>
        <form>
            <input type='text'
             value={username}
             onChange={e=>setusername(e.target.value)}
             className='form-control mb-2'
             placeholder=' User Name'
             />
             <input type='password'
             value={password}
             onChange={e=>setpassword(e.target.value)}
             className ='form-control mb-2'
             placeholder='password'
             />
             {/*  */}
             <button onClick={e=>submitLogin(e)} className='btn btn-info btn-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Login