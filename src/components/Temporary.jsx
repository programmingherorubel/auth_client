// Your React component
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useGetProtectedDataQuery } from './apiSlice';
import { login, logout } from './authSlice';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const { data, error } = useGetProtectedDataQuery(undefined, {
    skip: !isLoggedIn, // Skip the query if not logged in
    selectFromResult: (result) => result.data,
  });

  const loginMutation = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await loginMutation.mutateAsync({ username, password });
      dispatch(login(response.token));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // Fetch protected data when logged in
    if (isLoggedIn) {
      // You can also use 'data' and 'error' from the query result here
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Authentication Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome!</p>
          <button onClick={handleLogout}>Logout</button>
          <p>Protected Data: {data}</p>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;