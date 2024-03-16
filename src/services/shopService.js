import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../firebase/dataBase';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    postOrder: builder.mutation({
      query: (order) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),

    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    getProductById: builder.query({

      queryFn: async (id, queryApi, extraOptions, fetchWithBQ) => {
  
        const response = await fetchWithBQ('products.json');
        if (response.error) {
          return { error: response.error };
        }

        const allProducts = response.data;
        const product = Object.values(allProducts).find((product) => product.id === id);
        
       
        return product
          ? { data: product }
          : { error: new Error('Producto no encontrado') };
      },
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,usePostProfileImageMutation
} = shopApi;
