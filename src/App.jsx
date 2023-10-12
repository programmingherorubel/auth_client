import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { useDispatch } from 'react-redux';
import { logout, userInformation } from './App/featchers/userTokenInformationSlice';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check for a token in localStorage or cookies.
  //   const storedToken = localStorage.getItem('userToken');

  //   if (storedToken) {
  //     // Dispatch a login action to update the authentication state.
  //     dispatch(userInformation(storedToken));
  //   } else {
  //     // Dispatch a logout action to ensure the user is logged out.
  //     dispatch(logout());
  //   }
  // }, [dispatch]);
  
  return (
    <>
      <Home/>
    </>
  )
}

export default App