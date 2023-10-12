import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Main() {
 
  return (
    <>
        <Header></Header>
            <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Main