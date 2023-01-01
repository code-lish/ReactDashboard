import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: " https://random-d.uk/api" }),

  endpoints: (builder) => ({
    Credential: "include",
    getImage: builder.query({
      query: () => "/random",
    }),
  }),
});

export const { useGetImageQuery } = apiSlice;
