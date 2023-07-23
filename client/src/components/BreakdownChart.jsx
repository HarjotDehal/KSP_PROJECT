import React from "react";
import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetAllexpensesQuery, useGetAllproductsQuery, useGetSalesQuery,useGetAllexpensesandproductsQuery } from "state/api";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const BreakdownChart = ({ isDashboard = false }) => {
  // const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(365);
  const [sort, setSort] = useState({});

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
  
  const[totalWeekly,setTotalWeekly] = useState(0);
  const[totalMonthly,setTotalMonthly] = useState(0);
  const[totalYearly,setTotalYearly] = useState(0);

const [totalLoadPrices,setTotalLoadPrices] = useState(0);
const [totalLumperPrices,setTotalLumperPrices] = useState(0);

const [totalRevenue,setTotalRevenue] = useState(0);
// const {dataP, isPloading} = useGetAllproductsQuery({
//     page,
//     pageSize,
//     sort: JSON.stringify(sort),
//     search,
//   });


  // const { dataE , isReloading} = useGetAllexpensesQuery({
    // page,
    // pageSize,
    // sort: JSON.stringify(sort),
    // search,
  // });


const {data, isLoading} = useGetAllexpensesandproductsQuery({

  page,
  pageSize,
  sort: JSON.stringify(sort),
  search,

})


  // if (!data || isLoading ) return "Loading...";


  useEffect(() => {

    if (isLoading) return;

    // console.log(data);

    // Calculate the sum for each field from the transactions data
    if (data.transactions3) {
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

      data.transactions3.forEach((transaction) => {

        // console.log(transaction);
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
//  sum
 
 setTotalWeekly(sumFuel + sumRepairMaintanence + sumLumperFee + sumCatScales + sumOtherExpenses)
 setTotalMonthly(sumTractorTrailerWash+sumPhoneBill+sumOccupationalInsurance+sumTruckPayment+sumTrailerPayment+sumAuthorityInsurance+sumInsurance+sumEZPass+sumPrePass+sumTWIC)
 setTotalYearly(sumIftaAdminFee+sumDoctor+sumInspection+sumYardPayment+sumPayDepositFee+sumBasePlate+sumTrailerPlate+sumPermitsAndDrugTesting+sumHeavyVehicleUseTax+sumTicketsAndCitations+sumSFITruckReturns)
    }




    


  }, [data]);



  useEffect(() => {
    if (isLoading) return;
    // Calculate the sum for each field from the transactions data
    if (data.transactions2) {
     
      let sumLoadPrices =0;
      let sumLumperPrices=0;
      // ... Initialize other sum variables for other fields ...

      data.transactions2.forEach((transaction) => {
       
          sumLoadPrices+= transaction.loadPrice
          sumLumperPrices += transaction.loadLumper


        // ... Add other field values to their respective sum variables ...
      });

     
      setTotalLoadPrices(sumLoadPrices);
      setTotalLumperPrices(sumLumperPrices);
      setTotalRevenue(sumLoadPrices+sumLumperPrices)
// setTotalOtherExpenses(sumOtherExpenses);
      // ... Set other state variables for other fields ...
 
     }
  }, [data]);



  const colors = [
    theme.palette.secondary[200],
    theme.palette.secondary[300],
    theme.palette.secondary[400],
    theme.palette.secondary[500],
  ];





// Im gonna define a array here which will be 4 items that include a section header and total price. 

// It auto updates which is nice. 

// theres the bottom key,

// Ill also make like a key on the top right that tells you what expenses are what type. 

// also need the search to make us pull totals just from that time period

// Can pull using same query and just set pageSize very large. 

// pageSize is what limits the number of things returned. 

// On generic, we will return last 365 loads. 

// Can then specify based on date. 

// updating search will recall our products and expenses. 








  // const formattedData = Object.entries(data.salesByCategory).map(
  //   ([category, sales], i) => ({
  //     id: category,
  //     label: category,
  //     value: sales,
  //     color: colors[i],
  //   })
  // );



    const formattedDatta =[


      {
        id: "Profit",
        label: "Profit",
        value: totalRevenue - totalWeekly -totalMonthly - totalYearly,
        color: colors[0],

      },
      {
        id: "Weekly Expenses",
        label: "Weekly",
        value: totalWeekly,
        color: colors[1],
      },
      {
        id: "Monthly Expenses",
        label: "Monthly",
        value: totalMonthly,
        color: colors[2],
      },
      {
        id: "Yearly Expenses",
        label: "Yearly",
        value: totalYearly,
        color: colors[3],
      },

    ]



  return (
    <Box
    // loading={isLoading || !data}
    
      height={isDashboard ? "400px" : "95%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
         {isDashboard ? (
        <>
          <div style={{ textAlign: "center", display: "none" }}>
            Search in this format: YYYY/MM/DAY. Examples are to pull from 2023, 2023-07, 2023-07-20
          </div>
          <div style={{ textAlign: "center", display: "none" }}>
            Or Search a week like this: week-YYYY-MM-DAY. An Example is week-2023-07-20 to pull from between 7/20/23 and 7/27/23
          </div>
        </>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>
            Search in this format: YYYY/MM/DAY. Examples are to pull from 2023, 2023-07, 2023-07-20
          </div>
          <div style={{ textAlign: "center" }}>
            Or Search a week like this: week-YYYY-MM-DAY. An Example is week-2023-07-20 to pull from between 7/20/23 and 7/27/23
          </div>
        </>
      )}
          <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      <ResponsivePie

        data={formattedDatta}
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
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        // fontSize={26}
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={3}
        
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={1}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
          style: {fontSize:24,},
        }}
        arcLabel={(arc) =>
          `$${arc.value} (${((arc.value / (totalRevenue)) * 100).toFixed(
            2
          )}%)`
        }
        
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 20,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.secondary[500],
                },
              },
            ],
          },
        ]}
  
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, 20%)"
            : "translate(-50%, 200%)",
        }}
      >
        <Typography variant="h4">
          {!isDashboard && "Revenue:"} ${totalRevenue}
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakdownChart;
