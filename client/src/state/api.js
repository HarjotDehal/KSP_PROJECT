import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// this is basically the file that gets whatever we need. It fetches what we ask it to


// tag types have the identification type of what we can import and fetch it seems

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getExpenses: build.query({

      query: () => "client/expenses",
      providesTags: ["Expenses"],
    }),


    getLoadsales:build.query({
      query: () => "client/loadsales",
      providesTags : ["Loadsales"]
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getAllproducts: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/allproducts",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Allproducts"],
    }),
    getAllexpenses: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/allexpenses",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Allexpenses"],
    }),

    getAllexpensesandproducts: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/allexpensesandproducts",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Allexpensesandproducts"],
    }),
    getAllexpensesandproductsmonthly: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/allexpensesandproductsmonthly",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Allexpensesandproductsmonthly"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),

    createLoad: build.mutation({
      query: (loadData) =>
      
      ({
        url: "client/loads",
        method: "POST",
        body: loadData,
      })
      
      
      ,
    }),

    createExpense: build.mutation({
      query: (loadData) =>
      
      ({
        url: "client/newexpense",
        method: "POST",
        body: loadData,
      })
      
      
      ,
    }),

    createLoadsale : build.mutation({
      query: (loaddata) => ({

        url: "client/newloadsale",
        method: "POST",
        body:loaddata,
      })
    }),

    // updateLoad: build.mutation({
    //   query: ({updatedLoad, loadId }) => ({
    //     // url: `client/loads/${loadId}`,
    //     url: `client/loadss`,



    //     // console.log('jatt')

    //     method: "PATCH",
    //     body: updatedLoad, 
    //   }),
    //   // invalidatesTags: ["Loads"],
    // // console.log('jatt');

    // }),
    
    updateLoad: build.mutation({
      query: ({ loadId, updatedLoad }) => ({
        url: `client/loads/${loadId}`,
        method: "PATCH",
        body: updatedLoad,
      }),
      invalidatesTags: ["Loads"],
    }),

    deleteLoad: build.mutation({
      query: (loadData) => ({
        // url: `client/loads/${loadId}`,
        url: 'client/loads/delete',
        method: "DELETE",
        body: loadData,
      }),
      // invalidatesTags: ["Loads"],
    }),
    deleteExpense: build.mutation({
      query: (loadData) => ({
        // url: `client/loads/${loadId}`,
        url: 'client/expenses/delete',
        method: "DELETE",
        body: loadData,
      }),
      // invalidatesTags: ["Loads"],
    }),



  }),



});





// the value comes from getuser, it must have a use prefix and query suffix. these are redux toolkit

export const {
  
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useCreateLoadMutation,
  useUpdateLoadMutation,
  useDeleteLoadMutation,
  useCreateLoadsaleMutation,
  useGetAllproductsQuery,
  useCreateExpenseMutation,
  useGetExpensesQuery,
  useDeleteExpenseMutation,
  useGetAllexpensesQuery,
  useGetAllexpensesandproductsQuery,
  useGetAllexpensesandproductsmonthlyQuery,

} = api;
