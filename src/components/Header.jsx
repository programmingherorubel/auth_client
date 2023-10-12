import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../App/featchers/userTokenInformationSlice';

function Header() {
   const user = useSelector((state)=> state.users.value)
   useEffect(() => {
    // Check the user value and perform some action when it changes.
    if (user) {
      // User is logged in; you can do something here.
    } else {
      // User is not logged in; you can do something here.
    }
  }, [user]);

    
  
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-white text-xl font-semibold">Authentication</div>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/personal">
                Personal
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/dashbord">
                Dashbord
              </Link>
            </li>
             {!user && <li>
              <Link className="text-white hover:underline" to="/login">
                Login
              </Link>
            </li>}
            <li>
              <Link className="text-white hover:underline" to="/register">
                Register
              </Link>
            </li>
             (
              {user && <li onClick={()=>dispatch(logout())}>
                <Link className="text-white hover:underline" to="">
                  Logout
                </Link>
              </li>}
            )
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
