import React, { useMemo, useState,useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { ResponsiveLine } from "@nivo/line";
import { useGetAllexpensesandproductsQuery, useGetSalesQuery } from "state/api";
import { useGetAllexpensesandproductsmonthlyQuery } from "state/api";
import { reduce } from "lodash"; // Or import it from any other library or use JavaScript's native Array.prototype.reduce

const Monthly = () => {
  // const { data } = useGetSalesQuery();
  const theme = useTheme();

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

  // set search to the year right here. 
  // import the date from react, pull the year from it and then set the search to that right here. 


  // const [formattedData] = useMemo(() => {
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

  //   Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
  //     totalSalesLine.data = [
  //       ...totalSalesLine.data,
  //       { x: month, y: totalSales },
  //     ];
  //     totalUnitsLine.data = [
  //       ...totalUnitsLine.data,
  //       { x: month, y: totalUnits },
  //     ];
  //   });

  //   const formattedData = [totalSalesLine, totalUnitsLine];
  //   return [formattedData];
  // }, [data]); // eslint-disable-line react-hooks/exhaustive-deps







// Gonna have 2 lines in my chart

// need 12 data points for each line


// For my revenue
//  The line needs to take the sum of my revenue for a total month and set it equal.
//  One thing I can do is include all expenses here but have different expenses on the pie chart. 
//  Up to me



//  For expenses

// Add up all the expenses for each month and store it 
// just need an array of 12 points then. 


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

// expense variables
  // const [totalFuel, setTotalFuel] = useState(0);
  // const [totalTractorTrailerWash, setTotalTractorTrailerWash] = useState(0);
  // const [totalIftaAdminFee, setTotalIftaAdminFee] = useState(0);
  // const [totalPhoneBill, setTotalPhoneBill] = useState(0);
  // const [totalOccupationalInsurance, setTotalOccupationalInsurance] = useState(0);
  // const [totalDoctor, setTotalDoctor] = useState(0);
  // const [totalInspection, setTotalInspection] = useState(0);
  // const [totalYardPayment, setTotalYardPayment] = useState(0);
  // const [totalRepairMaintanence, setTotalRepairMaintanence] = useState(0);
  // const [totalPayDepositFee, setTotalPayDepositFee] = useState(0);
  // const [totalTruckPayment, setTotalTruckPayment] = useState(0);
  // const [totalTrailerPayment, setTotalTrailerPayment] = useState(0);
  // const [totalAuthorityInsurance, setTotalAuthorityInsurance] = useState(0);
  // const [totalInsurance, setTotalInsurance] = useState(0);
  // const [totalBasePlate, setTotalBasePlate] = useState(0);
  // const [totalTrailerPlate, setTotalTrailerPlate] = useState(0);
  // const [totalPermitsAndDrugTesting, setTotalPermitsAndDrugTesting] = useState(0);
  // const [totalHeavyVehicleUseTax, setTotalHeavyVehicleUseTax] = useState(0);
  // const [totalLumperFee, setTotalLumperFee] = useState(0);
  // const [totalCatScales, setTotalCatScales] = useState(0);
  // const [totalEZPass, setTotalEZPass] = useState(0);
  // const [totalPrePass, setTotalPrePass] = useState(0);
  // const [totalTWIC, setTotalTWIC] = useState(0);
  // const [totalTicketsAndCitations, setTotalTicketsAndCitations] = useState(0);
  // const [totalSFITruckReturns, setTotalSFITruckReturns] = useState(0);
  // const [totalOtherExpenses, setTotalOtherExpenses] = useState(0);
  


  // // product variables
  // const [totalLoadPrices,setTotalLoadPrices] = useState(0);
  // const [totalLumperPrices,setTotalLumperPrices] = useState(0);



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


  if (!data) return null;

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

  // Calculate total revenue data points
  const totalRevenueData = months.map((month) => ({

    x: month,


    
    y: eval(`${month.toLowerCase()}Revenue`) || 0, // You need to have individual revenue state variables for each month
  }));

  // Calculate total expense data points
  const totalExpenseData = months.map((month) => ({
    x: month,
    y: eval(`${month.toLowerCase()}Expense`) || 0, // You need to have individual expense state variables for each month
  }));

  const formattedData = [
    {
      id: "Revenue",
      color: theme.palette.primary[100],
      data: totalRevenueData,
    },
    {
      id: "Expenses",
      color: theme.palette.secondary[700],
      data: totalExpenseData,
    },
  ];

// Going to need to use a Useeffect most likely for each month


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MONTHLY REVENUE VS EXPENSES" subtitle="Chart of MONTHLY" />
      <Box height="75vh">
        {data ? (
          <ResponsiveLine
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
                  fontSize:'14px',
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            colors={{ datum: "color" }}
            margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            // curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 60,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -50,
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
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: -200,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 16,
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
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Monthly;
