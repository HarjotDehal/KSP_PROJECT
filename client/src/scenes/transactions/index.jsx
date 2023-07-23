import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";

// import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useGetAllproductsQuery } from "state/api";

const Transactions = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetAllproductsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [

    {
      field: "createdAt",
      headerName: "Load Date",
      flex:1,

      renderCell: (params) => {
        const createdAtDate = new Date(params.value);
        const formattedDate = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
        return <span>{formattedDate}</span>;
      },


    },


    {
      field: "CompanyName",
      headerName: "Company Name",
      flex: 1,
    },
    {
      field: "loadNumber",
      headerName: "Load Number",
      flex: 1,
      // sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "loadPickup",
      headerName: "Pickup Location",
      flex: 1,
    },
    {
      field: "loadDropoff",
      headerName: "Dropoff Location",
      flex: 1,
      // sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "loadPrice",
      headerName: "Load Price",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "loadLumper",
      headerName: "Load Lumper",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "loadInvoice",
      headerName: "Invoice",
      flex: 1,
      // sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "BOLPDF",
      headerName: "PDFS",
      flex: 1,
      // sortable: false,
      // renderCell: (params) => params.value.length,
    },

  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Load List" subtitle="View, Filter, or Export all your Loads" />

      <div style={{textAlign:"center"}}> Search in this format: YYYY-MM-DAY. Examples are to pull from 2023, 2023-07, 2023-07-20
</div>
<div style={{textAlign:"center"}}> Or Search a week like this: week-YYYY-MM-DAY. An Example is week-2023-07-20 to pull from between 7/20/23 and 7/27/23
</div>

<div style={{textAlign:"center"}}> You can also search by company name, load number, dropoff, pickup, or invoice type
</div>
      <Box
        height="80vh"
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
          sx={{fontSize: 14}}

          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
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

export default Transactions;
