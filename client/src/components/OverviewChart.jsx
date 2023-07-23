import React, { useMemo, useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetAllexpensesandproductsmonthlyQuery, useGetSalesQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  // const { data, isLoading } = useGetSalesQuery();



  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(365);
  const [sort, setSort] = useState({});


  const {data, isLoading} = useGetAllexpensesandproductsmonthlyQuery({

    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  
  })


  // if (!data || isLoading) {
  //   return "Loading..."; // You can display a loading indicator or a message here
  // }


  const [januaryRevenue, setJanuaryRevenue] = useState(0);
  const [februaryRevenue, setFebruaryRevenue] = useState(0);
    const [marchRevenue, setMarchRevenue] = useState(0);
    const [aprilRevenue, setAprilRevenue] = useState(0);
    const [mayRevenue, setMayRevenue] = useState(0);
    const [juneRevenue, setJuneRevenue] = useState(0);
    const [julyRevenue, setJulyRevenue] = useState(0);
    const [augustRevenue, setAugustRevenue] = useState(0);
    const [septemberRevenue, setSeptemberRevenue] = useState(0);
    const [octoberRevenue, setOctoberRevenue] = useState(0);
    const [novemberRevenue, setNovemberRevenue] = useState(0);
    const [decemberRevenue, setDecemberRevenue] = useState(0);
  
  
    const [januaryExpense, setJanuaryExpense] = useState(0);
    const [februaryExpense, setFebruaryExpense] = useState(0);
    const [marchExpense, setMarchExpense] = useState(0);
    const [aprilExpense, setAprilExpense] = useState(0);
    const [mayExpense, setMayExpense] = useState(0);
    const [juneExpense, setJuneExpense] = useState(0);
    const [julyExpense, setJulyExpense] = useState(0);
    const [augustExpense, setAugustExpense] = useState(0);
    const [septemberExpense, setSeptemberExpense] = useState(0);
    const [octoberExpense, setOctoberExpense] = useState(0);
    const [novemberExpense, setNovemberExpense] = useState(0);
    const [decemberExpense, setDecemberExpense] = useState(0);


    
  useEffect(() => {
    if (isLoading) return;
    // if (!data || isLoading) {
    //   return "Loading..."; // You can display a loading indicator or a message here
    // }
  
    // console.log(data.januaryP);

    const convertToArray = (objData) => (Array.isArray(objData) ? objData : [objData]);

    // Calculate the monthly revenue
    setJanuaryRevenue(convertToArray(data.januaryP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));

    // console.log("HI");
    setFebruaryRevenue(convertToArray(data.februaryP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setMarchRevenue(convertToArray(data.marchP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setAprilRevenue(convertToArray(data.aprilP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setMayRevenue(convertToArray(data.mayP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setJuneRevenue(convertToArray(data.juneP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setJulyRevenue(convertToArray(data.julyP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setAugustRevenue(convertToArray(data.augustP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setSeptemberRevenue(convertToArray(data.septemberP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setOctoberRevenue(convertToArray(data.octoberP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setNovemberRevenue(convertToArray(data.novemberP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));
    setDecemberRevenue(convertToArray(data.decemberP).reduce((acc, product) => acc + product.loadPrice+ product.loadLumper, 0));

    // ... repeat the above line for each month ...
  
      // Calculate the monthly expenses

      // console.log(data.januaryE);
  setJanuaryExpense(
    convertToArray(data.januaryE).reduce((acc, expense) => acc +
    expense.Fuel +
    expense.TractorTrailerWash +
    expense.iftaAdminFee +
    expense.PhoneBill +
    expense.OccupationalInsurance +
    expense.Doctor +
    expense.Inspection +
    expense.YardPayment +
    expense.RepairMaintanence +
    expense.PayDepositFee +
    expense.TruckPayment +
    expense.TrailerPayment +
    expense.AuthorityInsurance +
    expense.Insurance +
    expense.BasePlate +
    expense.TrailerPlate +
    expense.PermitsAndDrugTesting +
    expense.HeavyVehicleUseTax +
    expense.LumperFee +
    expense.CatScales +
    expense.EZPass +
    expense.PrePass +
    expense.TWIC +
    expense.TicketsAndCitations +
    expense.SFITruckReturns +
    expense.OtherExpenses,
  0
)
  );
  // console.log("HI");

  setFebruaryExpense(
    convertToArray(data.februaryE).reduce((acc, expense) => acc  +
    expense.Fuel +
    expense.TractorTrailerWash +
    expense.iftaAdminFee +
    expense.PhoneBill +
    expense.OccupationalInsurance +
    expense.Doctor +
    expense.Inspection +
    expense.YardPayment +
    expense.RepairMaintanence +
    expense.PayDepositFee +
    expense.TruckPayment +
    expense.TrailerPayment +
    expense.AuthorityInsurance +
    expense.Insurance +
    expense.BasePlate +
    expense.TrailerPlate +
    expense.PermitsAndDrugTesting +
    expense.HeavyVehicleUseTax +
    expense.LumperFee +
    expense.CatScales +
    expense.EZPass +
    expense.PrePass +
    expense.TWIC +
    expense.TicketsAndCitations +
    expense.SFITruckReturns +
    expense.OtherExpenses,
  0
)
  );
  setMarchExpense(
    convertToArray(data.marchE).reduce((acc, expense) => acc +
    expense.Fuel +
    expense.TractorTrailerWash +
    expense.iftaAdminFee +
    expense.PhoneBill +
    expense.OccupationalInsurance +
    expense.Doctor +
    expense.Inspection +
    expense.YardPayment +
    expense.RepairMaintanence +
    expense.PayDepositFee +
    expense.TruckPayment +
    expense.TrailerPayment +
    expense.AuthorityInsurance +
    expense.Insurance +
    expense.BasePlate +
    expense.TrailerPlate +
    expense.PermitsAndDrugTesting +
    expense.HeavyVehicleUseTax +
    expense.LumperFee +
    expense.CatScales +
    expense.EZPass +
    expense.PrePass +
    expense.TWIC +
    expense.TicketsAndCitations +
    expense.SFITruckReturns +
    expense.OtherExpenses,
  0
)
  );


  setAprilExpense(
    convertToArray(data.aprilE).reduce((acc, expense) => acc +
    expense.Fuel +
    expense.TractorTrailerWash +
    expense.iftaAdminFee +
    expense.PhoneBill +
    expense.OccupationalInsurance +
    expense.Doctor +
    expense.Inspection +
    expense.YardPayment +
    expense.RepairMaintanence +
    expense.PayDepositFee +
    expense.TruckPayment +
    expense.TrailerPayment +
    expense.AuthorityInsurance +
    expense.Insurance +
    expense.BasePlate +
    expense.TrailerPlate +
    expense.PermitsAndDrugTesting +
    expense.HeavyVehicleUseTax +
    expense.LumperFee +
    expense.CatScales +
    expense.EZPass +
    expense.PrePass +
    expense.TWIC +
    expense.TicketsAndCitations +
    expense.SFITruckReturns +
    expense.OtherExpenses,
  0
));

setMayExpense(
  convertToArray(data.mayE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));


setJuneExpense(
  convertToArray(data.juneE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));



setJulyExpense(
  convertToArray(data.julyE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));

setAugustExpense(
  convertToArray(data.augustE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));


setSeptemberExpense(
  convertToArray(data.septemberE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));


setOctoberExpense(
  convertToArray(data.octoberE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));



setNovemberExpense(
  convertToArray(data.novemberE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));


setDecemberExpense(
  convertToArray(data.decemberE).reduce((acc, expense) => acc +
  expense.Fuel +
  expense.TractorTrailerWash +
  expense.iftaAdminFee +
  expense.PhoneBill +
  expense.OccupationalInsurance +
  expense.Doctor +
  expense.Inspection +
  expense.YardPayment +
  expense.RepairMaintanence +
  expense.PayDepositFee +
  expense.TruckPayment +
  expense.TrailerPayment +
  expense.AuthorityInsurance +
  expense.Insurance +
  expense.BasePlate +
  expense.TrailerPlate +
  expense.PermitsAndDrugTesting +
  expense.HeavyVehicleUseTax +
  expense.LumperFee +
  expense.CatScales +
  expense.EZPass +
  expense.PrePass +
  expense.TWIC +
  expense.TicketsAndCitations +
  expense.SFITruckReturns +
  expense.OtherExpenses,
0
));

  // ... repeat the above line for each month ...
  }, [data, isLoading]);













  // const [totalSalesLine, totalUnitsLine] = useMemo(() => {
  //   if (!data) return [];

  //   const { monthlyData } = data;
  //   const totalSalesLine = {
  //     id: "totalSales",
  //     color: theme.palette.secondary.main,
  //     data: [],
  //   };
  //   const totalUnitsLine = {
  //     id: "totalUnits",
  //     color: theme.palette.secondary[600],
  //     data: [],
  //   };

  //   Object.values(monthlyData).reduce(
  //     (acc, { month, totalSales, totalUnits }) => {
  //       const curSales = acc.sales + totalSales;
  //       const curUnits = acc.units + totalUnits;

  //       totalSalesLine.data = [
  //         ...totalSalesLine.data,
  //         { x: month, y: curSales },
  //       ];
  //       totalUnitsLine.data = [
  //         ...totalUnitsLine.data,
  //         { x: month, y: curUnits },
  //       ];

  //       return { sales: curSales, units: curUnits };
  //     },
  //     { sales: 0, units: 0 }
  //   );

  //   return [[totalSalesLine], [totalUnitsLine]];
  // }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data || isLoading) return "Loading...";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

// Change the data points for each month so that it includes the sum of itself and all previous months
const totalRevenueData = months.map((month) => {

  // x: month,
  let number =0;

for (let i=0; i< months.length; i++){

  if(months[i] ===month){
    number = i
    break;
  }
}

let cumulativesum =0;

for (let j=0; j< number+1; j++){

cumulativesum += eval(`${months[j].toLowerCase()}Revenue`)
}

  // y: eval(`${month.toLowerCase()}Revenue`) || 0, // You need to have individual revenue state variables for each month


return {
  x: month,
  y: cumulativesum || 0,
}

});

// Calculate total expense data points
const totalExpenseData = months.map((month) => {

  // x: month,
  let number =0;

for (let i=0; i< months.length; i++){

  if(months[i] ===month){
    number = i
    break;
  }
}

let cumulativesum =0;

for (let j=0; j< number; j++){

cumulativesum += eval(`${months[j].toLowerCase()}Expense`)
}

  // y: eval(`${month.toLowerCase()}Expense`) || 0, // You need to have individual revenue state variables for each month


return {
  x: month,
  y: cumulativesum || 0,
}

});
  const formattedData = [
    {
      id: "Revenue",
      color: theme.palette.secondary.main,
      data: totalRevenueData,
    },
    {
      id: "Expenses",
      color: theme.palette.secondary[600],
      data: totalExpenseData,
    },
  ];

// const totallRev={
//   id: "TotalRevenue",
//       color: theme.palette.secondary.main,
//       data: totalRevenueData,

// }


// const totallExp ={

//   id: "TotalExpenses",
//   color: theme.palette.secondary[600],
//   data: totalExpenseData,
// }

  return (
    <ResponsiveLine
      // data={view === "Revenue" ? totallRev : totallExp}
      // data={formattedData.filter((item) => view === "Revenue" ? item.id === "Revenue" : item.id === "Expenses")}
      data={formattedData}

      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary[200],
            },
          },
          legend: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.secondary[200],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.secondary[200],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.secondary[200],
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Dollars`,
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
