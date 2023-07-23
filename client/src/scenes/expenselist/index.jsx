import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";

// import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useGetAllproductsQuery } from "state/api";
import { useGetAllexpensesQuery } from "state/api";

const Expenselist = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetAllexpensesQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [

    {
      field: "createdAt",
      headerName: "Expense Date",
      flex:1,

      renderCell: (params) => {
        const createdAtDate = new Date(params.value);
        const formattedDate = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
        return <span>{formattedDate}</span>;
      },


    },


    // {
    //   field: "Fuel",
    //   headerName: "Fuel",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    // },
    // {
    //   field: "TractorTrailerWash",
    //   headerName: "TractorTrailerWash",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    // },

    // {
    //   field: "PhoneBill",
    //   headerName: "Phone Bill",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    // },
    // {
    //   field: "OccupationalInsurance",
    //   headerName: "Occupational Insurance",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    // },
    // {
    //   field: "LumperFee",
    //   headerName: "LumperFee",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    //   // sortable: false,
    //   // renderCell: (params) => params.value.length,
    // },
    // {
    //   field: "RepairMaintanence",
    //   headerName: "Repair Maintanence",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    // },


    



    // {
    //   field: "Insurance",
    //   headerName: "Insurance",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    //   // sortable: false,
    //   // renderCell: (params) => params.value.length,
    // },
    // {
    //   field: "CatScales",
    //   headerName: "CAT Scales",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    // },
    // {
    //   field: "EZPass",
    //   headerName: "EZPass",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    // },
    // {
    //   field: "TicketsAndCitations",
    //   headerName: "TicketsAndCitations",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    //   // sortable: false,
    //   // renderCell: (params) => params.value.length,
    // },
    // {
    //   field: "OtherExpenses",
    //   headerName: "OtherExpenses",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    //   // sortable: false,
    //   // renderCell: (params) => params.value.length,
    // },

    {
      field: "Fuel",
      headerName: "Fuel",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TractorTrailerWash",
      headerName: "Tractor Trailer Wash",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "iftaAdminFee",
      headerName: "IFTA Admin Fee",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "PhoneBill",
      headerName: "Phone Bill",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "OccupationalInsurance",
      headerName: "Occupational Insurance",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "Doctor",
      headerName: "Doctor",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "Inspection",
      headerName: "Inspection",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "YardPayment",
      headerName: "Yard Payment",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "RepairMaintanence",
      headerName: "Repair & Maintenance",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "PayDepositFee",
      headerName: "Pay Deposit Fee",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TruckPayment",
      headerName: "Truck Payment",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TrailerPayment",
      headerName: "Trailer Payment",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "AuthorityInsurance",
      headerName: "Authority Insurance",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "Insurance",
      headerName: "Insurance",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "BasePlate",
      headerName: "Base Plate",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TrailerPlate",
      headerName: "Trailer Plate",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "PermitsAndDrugTesting",
      headerName: "Permits & Drug Testing",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "HeavyVehicleUseTax",
      headerName: "Heavy Vehicle Use Tax",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "LumperFee",
      headerName: "Lumper Fee",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "CatScales",
      headerName: "Cat Scales",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "EZPass",
      headerName: "EZ Pass",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "PrePass",
      headerName: "PrePass",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TWIC",
      headerName: "TWIC",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "TicketsAndCitations",
      headerName: "Tickets & Citations",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "SFITruckReturns",
      headerName: "SFI Truck Returns",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "OtherExpenses",
      headerName: "Other Expenses",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },



  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Expense List" subtitle="View, Filter, or Export all your Expenses" />

  {/* <div style={{textAlign:"center"}}> Search in this format: YYYY-MM-DAY. Examples are to pull from 2023, 2023-07, 2023-07-20
</div>
<div style={{textAlign:"center"}}> Or Search a week like this: week-YYYY-MM-DAY. An Example is week-2023-07-20 to pull from between 7/20/23 and 7/27/23
</div> */}
<div style={{textAlign:"center"}}> Search Bar is on the Right Side, Same Rules Apply
</div>
      <Box
        height="80vh"
        width="150%" overflowx="auto"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          sx={{fontSize: 16}}
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Expenselist;
