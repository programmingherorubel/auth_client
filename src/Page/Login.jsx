import React, { useState } from 'react'
import { useLoginUserMutation } from '../App/featchers/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInformation } from '../App/featchers/userTokenInformationSlice';

function Login() {
  const [loginUser,{isError,isLoading,data,isSuccess,error}] = useLoginUserMutation()
  const selector = useSelector((state)=>console.log(state))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    await loginUser(formData)
    console.log(formData)
  };

  if(isLoading){
    return <p >data loading</p>
  }
  if(data?.token){
    localStorage.setItem('userToken',data.token)
    dispatch(userInformation(data?.token))
    navigate('/')
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login