import React, { useState,useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";

// import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useGetAllproductsQuery } from "state/api";
import { useGetAllexpensesQuery } from "state/api";

const ExpenseOverview = () => {
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

const [totalFuel, setTotalFuel] = useState(0);
const [totalTractorTrailerWash, setTotalTractorTrailerWash] = useState(0);
const [totalIftaAdminFee, setTotalIftaAdminFee] = useState(0);
const [totalPhoneBill, setTotalPhoneBill] = useState(0);
const [totalOccupationalInsurance, setTotalOccupationalInsurance] = useState(0);
const [totalDoctor, setTotalDoctor] = useState(0);
const [totalInspection, setTotalInspection] = useState(0);
const [totalYardPayment, setTotalYardPayment] = useState(0);
const [totalRepairMaintanence, setTotalRepairMaintanence] = useState(0);
const [totalPayDepositFee, setTotalPayDepositFee] = useState(0);
const [totalTruckPayment, setTotalTruckPayment] = useState(0);
const [totalTrailerPayment, setTotalTrailerPayment] = useState(0);
const [totalAuthorityInsurance, setTotalAuthorityInsurance] = useState(0);
const [totalInsurance, setTotalInsurance] = useState(0);
const [totalBasePlate, setTotalBasePlate] = useState(0);
const [totalTrailerPlate, setTotalTrailerPlate] = useState(0);
const [totalPermitsAndDrugTesting, setTotalPermitsAndDrugTesting] = useState(0);
const [totalHeavyVehicleUseTax, setTotalHeavyVehicleUseTax] = useState(0);
const [totalLumperFee, setTotalLumperFee] = useState(0);
const [totalCatScales, setTotalCatScales] = useState(0);
const [totalEZPass, setTotalEZPass] = useState(0);
const [totalPrePass, setTotalPrePass] = useState(0);
const [totalTWIC, setTotalTWIC] = useState(0);
const [totalTicketsAndCitations, setTotalTicketsAndCitations] = useState(0);
const [totalSFITruckReturns, setTotalSFITruckReturns] = useState(0);
const [totalOtherExpenses, setTotalOtherExpenses] = useState(0);


useEffect(() => {
    // Calculate the sum for each field from the transactions data
    if (data && data.transactions) {
      let sumFuel = 0;
      let sumTractorTrailerWash = 0;
      let sumIftaAdminFee = 0;
      let sumPhoneBill = 0;
      let sumOccupationalInsurance = 0;
      let sumDoctor = 0;
      let sumInspection = 0;
      let sumYardPayment = 0;
      let sumRepairMaintanence = 0;
      let sumPayDepositFee = 0;
      let sumTruckPayment = 0;
      let sumTrailerPayment = 0;
      let sumAuthorityInsurance = 0;
      let sumInsurance = 0;
      let sumBasePlate = 0;
      let sumTrailerPlate = 0;
      let sumPermitsAndDrugTesting = 0;
      let sumHeavyVehicleUseTax = 0;
      let sumLumperFee = 0;
      let sumCatScales = 0;
      let sumEZPass = 0;
      let sumPrePass = 0;
      let sumTWIC = 0;
      let sumTicketsAndCitations = 0;
      let sumSFITruckReturns = 0;
      let sumOtherExpenses = 0;
      // ... Initialize other sum variables for other fields ...

      data.transactions.forEach((transaction) => {
        sumFuel += transaction.Fuel;
        sumTractorTrailerWash += transaction.TractorTrailerWash;
        sumIftaAdminFee += transaction.iftaAdminFee;
        sumPhoneBill += transaction.PhoneBill;
        sumOccupationalInsurance += transaction.OccupationalInsurance;
        sumDoctor += transaction.Doctor;
        sumInspection += transaction.Inspection;
        sumYardPayment += transaction.YardPayment;
        sumRepairMaintanence += transaction.RepairMaintanence;
        sumPayDepositFee += transaction.PayDepositFee;
        sumTruckPayment += transaction.TruckPayment;
        sumTrailerPayment += transaction.TrailerPayment;
        sumAuthorityInsurance += transaction.AuthorityInsurance;
        sumInsurance += transaction.Insurance;
        sumBasePlate += transaction.BasePlate;
        sumTrailerPlate += transaction.TrailerPlate;
        sumPermitsAndDrugTesting += transaction.PermitsAndDrugTesting;
        sumHeavyVehicleUseTax += transaction.HeavyVehicleUseTax;
        sumLumperFee += transaction.LumperFee;
        sumCatScales += transaction.CatScales;
        sumEZPass += transaction.EZPass;
        sumPrePass += transaction.PrePass;
        sumTWIC += transaction.TWIC;
        sumTicketsAndCitations += transaction.TicketsAndCitations;
        sumSFITruckReturns += transaction.SFITruckReturns;
        sumOtherExpenses += transaction.OtherExpenses;
        // ... Add other field values to their respective sum variables ...
      });

      setTotalFuel(sumFuel);
      setTotalTractorTrailerWash(sumTractorTrailerWash);
      setTotalIftaAdminFee(sumIftaAdminFee);
setTotalPhoneBill(sumPhoneBill);
setTotalOccupationalInsurance(sumOccupationalInsurance);
setTotalDoctor(sumDoctor);
setTotalInspection(sumInspection);
setTotalYardPayment(sumYardPayment);
setTotalRepairMaintanence(sumRepairMaintanence);
setTotalPayDepositFee(sumPayDepositFee);
setTotalTruckPayment(sumTruckPayment);
setTotalTrailerPayment(sumTrailerPayment);
setTotalAuthorityInsurance(sumAuthorityInsurance);
setTotalInsurance(sumInsurance);
setTotalBasePlate(sumBasePlate);
setTotalTrailerPlate(sumTrailerPlate);
setTotalPermitsAndDrugTesting(sumPermitsAndDrugTesting);
setTotalHeavyVehicleUseTax(sumHeavyVehicleUseTax);
setTotalLumperFee(sumLumperFee);
setTotalCatScales(sumCatScales);
setTotalEZPass(sumEZPass);
setTotalPrePass(sumPrePass);
setTotalTWIC(sumTWIC);
setTotalTicketsAndCitations(sumTicketsAndCitations);
setTotalSFITruckReturns(sumSFITruckReturns);
setTotalOtherExpenses(sumOtherExpenses);
      // ... Set other state variables for other fields ...
    }
  }, [data]);





  const RotatedTable = ({ data }) => {
    return (
        <table style={{ borderCollapse: "collapse", width:'1600px',marginBottom:'50px' }} >
        <thead>
          <tr>
            <th style={{fontSize:'22px', minWidth: "100px", padding: "8px", border: "1px solid black", whiteSpace: "nowrap" }}>Expense Type</th>
            <th style={{fontSize:'22px', minWidth: "100px", padding: "8px", border: "1px solid black" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>Fuel</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalFuel).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TractorTrailerWash</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalTractorTrailerWash).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px",fontSize:'18px', border: "1px solid black", fontWeight: "bold" }}>iftaAdminFee</td>
            <td style={{ padding: "8px",fontSize:'18px', border: "1px solid black" }}>${Number(data.totaliftaAdminFee).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>PhoneBill</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalPhoneBill).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>OccupationalInsurance</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalOccupationalInsurance).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>Doctor</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalDoctor).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>Inspection</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalInspection).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>YardPayment</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalYardPayment).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>RepairMaintanence</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalRepairMaintanence).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>PayDepositFee</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalPayDepositFee).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TruckPayment</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalTruckPayment).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TrailerPayment</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalTrailerPayment).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>AuthorityInsurance</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalAuthorityInsurance).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>Insurance</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalInsurance).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>BasePlate</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalBasePlate).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TrailerPlate</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalTrailerPlate).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>PermitsAndDrugTesting</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalPermitsAndDrugTesting).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>HeavyVehicleUseTax</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalHeavyVehicleUseTax).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>LumperFee</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalLumperFee).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black", fontWeight: "bold" }}>CatScales</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalCatScales).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>EZPass</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalEZPass).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black", fontWeight: "bold" }}>PrePass</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalPrePass).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TWIC</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalTWIC).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>TicketsAndCitations</td>
            <td style={{ fontSize:'18px',padding: "8px", border: "1px solid black" }}>${Number(data.totalTicketsAndCitations).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>SFITruckReturns</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalSFITruckReturns).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black", fontWeight: "bold" }}>OtherExpenses</td>
            <td style={{fontSize:'18px', padding: "8px", border: "1px solid black" }}>${Number(data.totalOtherExpenses).toFixed(2)}</td>
          </tr>
          {/* Add more rows for other variables */}
        </tbody>
      </table>
    );
  };






  const columns = [

    // {
    //   field: "createdAt",
    //   headerName: "Expense Date",
    //   flex:1,

    //   renderCell: (params) => {
    //     const createdAtDate = new Date(params.value);
    //     const formattedDate = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
    //     return <span>{formattedDate}</span>;
    //   },


    // },


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
        headerName: "TractorTrailerWash",
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
        headerName: "Repair Maintanence",
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
        headerName: "CAT Scales",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "EZPass",
        headerName: "EZPass",
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
        field: "OtherExpenses",
        headerName: "Other Expenses",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },




    

  ];















  const getRowHeight = () => {
    if (data && data.transactions && data.transactions.length === 1) {
      // Set a larger height for the single row
      return 100;
    } else {
      // Set the default row height for other rows
      return 50;
    }
  };

  const totalRow = {
    id: "totals",
    createdAt: "Total",
    Fuel: totalFuel,
    TractorTrailerWash: totalTractorTrailerWash,
    iftaAdminFee:totalIftaAdminFee,
    PhoneBill: totalPhoneBill,
  OccupationalInsurance: totalOccupationalInsurance,
  Doctor: totalDoctor,
  Inspection: totalInspection,
  YardPayment: totalYardPayment,
  RepairMaintanence: totalRepairMaintanence,
  PayDepositFee: totalPayDepositFee,
  TruckPayment: totalTruckPayment,
  TrailerPayment: totalTrailerPayment,
  AuthorityInsurance: totalAuthorityInsurance,
  Insurance: totalInsurance,
  BasePlate: totalBasePlate,
  TrailerPlate: totalTrailerPlate,
  PermitsAndDrugTesting: totalPermitsAndDrugTesting,
  HeavyVehicleUseTax: totalHeavyVehicleUseTax,
  LumperFee: totalLumperFee,
  CatScales: totalCatScales,
  EZPass: totalEZPass,
  TicketsAndCitations: totalTicketsAndCitations,
  OtherExpenses: totalOtherExpenses,
    // ... Other field sums go here ...
  


};


const rowss =[

    {
        id: "total_row",
        Fuel: totalFuel,
        TractorTrailerWash: totalTractorTrailerWash,
    iftaAdminFee:totalIftaAdminFee,

        PhoneBill: totalPhoneBill,
        OccupationalInsurance: totalOccupationalInsurance,
        Doctor: totalDoctor,
        Inspection: totalInspection,
        YardPayment: totalYardPayment,
        RepairMaintanence: totalRepairMaintanence,
        PayDepositFee: totalPayDepositFee,
        TruckPayment: totalTruckPayment,
        TrailerPayment: totalTrailerPayment,
        AuthorityInsurance: totalAuthorityInsurance,
        Insurance: totalInsurance,
        BasePlate: totalBasePlate,
        TrailerPlate: totalTrailerPlate,
        PermitsAndDrugTesting: totalPermitsAndDrugTesting,
        HeavyVehicleUseTax: totalHeavyVehicleUseTax,
        LumperFee: totalLumperFee,
        CatScales: totalCatScales,
        EZPass: totalEZPass,
        PrePass: totalPrePass,
        TWIC: totalTWIC,
        TicketsAndCitations: totalTicketsAndCitations,
        SFITruckReturns: totalSFITruckReturns,
        OtherExpenses: totalOtherExpenses,

    },
]


  return (
    // <Box m="1.5rem 2.5rem">
    //   <Header title="Expenses" subtitle="Entire list of Expenses" />
    //   <Box
    //     height="80vh"
    //     width="150%" overflowX="auto"
    //     sx={{
    //       "& .MuiDataGrid-root": {
    //         border: "none",
    //       },
    //       "& .MuiDataGrid-cell": {
    //         borderBottom: "none",
    //       },
    //       "& .MuiDataGrid-columnHeaders": {
    //         backgroundColor: theme.palette.background.alt,
    //         color: theme.palette.secondary[100],
    //         borderBottom: "none",
    //       },
    //       "& .MuiDataGrid-virtualScroller": {
    //         backgroundColor: theme.palette.primary.light,
    //       },
    //       "& .MuiDataGrid-footerContainer": {
    //         backgroundColor: theme.palette.background.alt,
    //         color: theme.palette.secondary[100],
    //         borderTop: "none",
    //       },
    //       "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    //         color: `${theme.palette.secondary[200]} !important`,
    //       },
    //     }}
    //   >


    //     <DataGrid
    //       loading={isLoading || !data}
    //     //   getRowId={(row) => row._id}
    //     //   rows={(data && data.transactions) || []}
    //       rows={[totalRow]} // Render only the total row
    //       columns={columns}
    //       rowCount={(data && data.total) || 0}
    //       getRowHeight={getRowHeight}
    //       rowsPerPageOptions={[20, 50, 100]}
    //       pagination
    //       page={page}
    //       pageSize={pageSize}
    //       paginationMode="server"
    //       sortingMode="server"
    //       onPageChange={(newPage) => setPage(newPage)}
    //       onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    //       onSortModelChange={(newSortModel) => setSort(...newSortModel)}
    //       components={{ Toolbar: DataGridCustomToolbar }}
    //       componentsProps={{
    //         toolbar: { searchInput, setSearchInput, setSearch },
    //       }}
    //     />
    //   </Box>
    // </Box>

    <Box m="1.5rem 2.5rem">
    <Header title="Expenses" subtitle="Entire list of Expenses" />
    <Box width="100%" overflowX="auto" marginBottom={200}>
      {data && data.transactions && (
        <RotatedTable
          data={{
            totalFuel,
            totalTractorTrailerWash,
            totalIftaAdminFee,
            totalPhoneBill,
            totalOccupationalInsurance,
            totalDoctor,
            totalInspection,
            totalYardPayment,
            totalRepairMaintanence,
            totalPayDepositFee,
            totalTruckPayment,
            totalTrailerPayment,
            totalAuthorityInsurance,
            totalInsurance,
            totalBasePlate,
            totalTrailerPlate,
            totalPermitsAndDrugTesting,
            totalHeavyVehicleUseTax,
            totalLumperFee,
            totalCatScales,
            totalEZPass,
            totalPrePass,
            totalTWIC,
            totalTicketsAndCitations,
            totalSFITruckReturns,
            totalOtherExpenses,
            // ... add more data for other columns ...
          }}
          sx={{
            marginBottom: 200}}
        />
      )}
    </Box>
  </Box>



  );
};

export default ExpenseOverview;
