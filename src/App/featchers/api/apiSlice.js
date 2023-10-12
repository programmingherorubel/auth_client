import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000/',
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: 'users/register',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'users/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = apiSlice;
