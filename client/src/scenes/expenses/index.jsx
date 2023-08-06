import React, { useState,useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  Modal,
  TextField,
  useMediaQuery,
  MenuItem
} from "@mui/material";
import Header from "components/Header";
// import { useGetProductsQuery } from "state/api";
import { useCreateLoadMutation } from "state/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import LoadEditForm from "./loadEditForm";
// import { createLoad } from "actions/loadActions";
import { useUpdateLoadMutation } from "state/api";
// import { useDeleteLoadMutation } from "state/api";
// import { useCreateLoadsaleMutation } from "state/api";

import { useCreateExpenseMutation } from "state/api";
import { useDeleteExpenseMutation } from "state/api";
import { useGetExpensesQuery } from "state/api";

// import { updatePost } from "actions/loadActions";

const Expense = ({  _id,
  Fuel,
  TractorTrailerWash,
  iftaAdminFee,
  PhoneBill,
  OccupationalInsurance,
  Doctor,
  Inspection,
  YardPayment,
  RepairMaintanence,
  PayDepositFee,
  TruckPayment,
  TrailerPayment,
  AuthorityInsurance,
  Insurance,
  BasePlate,
  TrailerPlate,
  PermitsAndDrugTesting,
  HeavyVehicleUseTax,
  LumperFee,
   CatScales,
  EZPass,
  PrePass,
  TWIC,
  TicketsAndCitations,
  SFITruckReturns,
  OtherExpenses,




  onEdit,

  createdAt,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [newLoadData, setNewLoadData] = useState({
  //   // Initialize the new load data state here
  //   // Example:
  //   loadName: "",
  //   loadDescription: "",
  //   loadPrice: 0,
  //   // Add more properties as needed
  // });


  // const mydate = createdAt
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dateObject = new Date(createdAt);
  const month = monthNames[dateObject.getMonth()];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

//   const cardBackgroundClass = rating === 'paid' ? 'green-background' : 'red-background';


      return (
      <Card
      sx={{
        backgroundImage: "none",
        borderRadius: "0.55rem",
    //     '&.green-background': {
    //       backgroundColor: '#125e2f',
    //     },

    //     '&.red-background': {
    //       backgroundColor: '#6e2121',
    //     },
    //   }}
    //   className={cardBackgroundClass}
      
      backgroundColor: theme.palette.background.alt
      }}

      
      >
      <CardContent>
        <Typography
        // variant="h4"
          sx={{ fontSize: 16 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >

          {formattedDate}

          {/* We can have different categories for loads here */}
        </Typography>
    
        {Fuel !== 0 && (
        // <Typography variant="h4" component="div">
        <Typography style={{ fontSize: '18px' }}>

        {/* LoadName:  {name} */}
        Fuel = ${Fuel}

          {/* LOAD COMPANY NAME */}
        </Typography>

        )}


{TractorTrailerWash !== 0 && (
        // <Typography variant="h5" sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
        <Typography style={{ fontSize: '18px' }}>


          {/* ${Number(price).toFixed(2)} */}
          Tractor Trailer Wash = ${TractorTrailerWash}
          {/* PRICE FOR LOAD $$$3000 etc */}
        </Typography>
)}
        {/* <Rating value={rating} readOnly /> */}
         {/* INVOICE PAID/UNPAID */}

         
         {iftaAdminFee !== 0 && (
          <Typography style={{ fontSize: '18px' }}>
            iftaAdminFee = ${iftaAdminFee}
          </Typography>
        )}


{PhoneBill !== 0 && (
       <Typography style={{fontSize:'18px'}}>
        {/* INVOICE:   {rating} */}

        PhoneBill = ${PhoneBill}

        </Typography>

        )}

        {OccupationalInsurance !== 0 &&(     

<Typography style={{fontSize:'18px'}}>

        OccupationalInsurance = ${OccupationalInsurance}
       
        </Typography>
       
       )}
        <Typography  style={{fontSize:'16px'}}>
          
          
       {/* Load Number:    {description} */}
        {/* LOAD NUMBER GOES HERE */}

        {Doctor !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
        Doctor = ${Doctor}

</Typography>)}

{Inspection !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
        Inspection = ${Inspection}

        </Typography>)}



        {YardPayment !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
        YardPayment = ${YardPayment}
        </Typography>)}


        {RepairMaintanence !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
        RepairMaintanence = ${RepairMaintanence}
        </Typography>)}



        {PayDepositFee !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                PayDepositFee = ${PayDepositFee}
        </Typography>)}
            
        {TruckPayment !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TruckPayment = ${TruckPayment}
        </Typography>)}
              
        {TrailerPayment !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TrailerPayment = ${TrailerPayment}
        </Typography>)}
               

        {AuthorityInsurance !== 0 &&(     

<Typography style={{fontSize:'18px'}}>

                AuthorityInsurance = ${AuthorityInsurance}
             
        </Typography>)}
             
             

             
        {Insurance !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                Insurance = ${Insurance}
                </Typography>)}




        </Typography>




        <Typography style={{fontSize:'18px'}}>
            
            {/* id: {_id} */}
            {/* Lumper - {lumper} */}

            {BasePlate !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            BasePlate = ${BasePlate}
        
            </Typography> )}
            

            {TrailerPlate !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TrailerPlate = ${TrailerPlate}
            
                </Typography> )}
            
            
                {PermitsAndDrugTesting !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                PermitsAndDrugTesting = ${PermitsAndDrugTesting}
                </Typography> )}
               
            
            </Typography>
          <Typography  style={{fontSize:'18px'}}>
            
            
            {/* Supply Left: {supply} */}

            {/* Pickup : {supply} */}

            {HeavyVehicleUseTax !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            HeavyVehicleUseTax = ${HeavyVehicleUseTax}
            </Typography> )}

            {LumperFee !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                LumperFee = ${LumperFee}

                </Typography> )}

                {CatScales !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                CatScales = ${CatScales}
            
                </Typography> )}


            </Typography>


        {EZPass !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            EZPass = ${EZPass}

            </Typography> )}

            {PrePass !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                PrePass = ${PrePass}

                </Typography> )}

                {TWIC !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TWIC = ${TWIC}

                </Typography> )}





        {TicketsAndCitations !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
          TicketsAndCitations = ${TicketsAndCitations}
          </Typography> )}


          {SFITruckReturns !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                SFITruckReturns = ${SFITruckReturns}

         
                </Typography> )}


                {OtherExpenses !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                OtherExpenses = ${OtherExpenses}


                </Typography> )}




      </CardContent>
      <CardActions >
        {/* <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button> */}

      <Button
          variant="primary"
          // size="small"
          style={{marginLeft: '70%', backgroundColor: '#aba43c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',}}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e3d72d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#aba43c'}
          onClick={() => onEdit(_id)}
        >
          Edit
        </Button>
      </CardActions>
      
        {/* <CardContent> */}
          {/* <Typography style={{fontSize:'18px'}}> */}
            
            {/* id: {_id} */}
            {/* Lumper - {lumper} */}

            {/* {BasePlate !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            BasePlate = ${BasePlate}
        
            </Typography> )}
            

            {TrailerPlate !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TrailerPlate = ${TrailerPlate}
            
                </Typography> )}
            
            
                {PermitsAndDrugTesting !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                PermitsAndDrugTesting = ${PermitsAndDrugTesting}
                </Typography> )}
               
            
            </Typography>
          <Typography  style={{fontSize:'18px'}}>
             */}
            
            {/* Supply Left: {supply} */}

            {/* Pickup : {supply} */}

            {/* {HeavyVehicleUseTax !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            HeavyVehicleUseTax = ${HeavyVehicleUseTax}
            </Typography> )}

            {LumperFee !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                LumperFee = ${LumperFee}

                </Typography> )}

                {CatScales !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                CatScales = ${CatScales}
            
                </Typography> )} */}


            {/* </Typography> */}
          {/* <Typography  style={{fontSize:'18px'}}> */}
            {/* Yearly Sales This Year: {stat.yearlySalesTotal} */}

            {/* Dropoff : {stat} */}

            {/* {EZPass !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
            EZPass = ${EZPass}

            </Typography> )}

            {PrePass !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                PrePass = ${PrePass}

                </Typography> )}

                {TWIC !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                TWIC = ${TWIC}

                </Typography> )} */}

          {/* </Typography> */}
{/*           
        </CardContent>
      </Collapse> */}

      {/* <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      > */}
            {/* Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits} */}

         {/* <a href=`file:///C:/Users/Harjot%20D/Downloads/${BOLPDF}`> */}
          
        {/* The PDF is here:   <a href={'file:///C:/Users/Harjot%20D/Downloads/' + BOLPDF} target="_blank"> Your PDF</a> */}

          
           {/* {`file:///C:/Users/Harjot%20D/Downloads/${BOLPDF}`} */}
          {/* {BOLPDF} */}
          {/* {TicketsAndCitations !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
          TicketsAndCitations = ${TicketsAndCitations}
          </Typography> )}


          {SFITruckReturns !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                SFITruckReturns = ${SFITruckReturns}

         
                </Typography> )}


                {OtherExpenses !== 0 &&(     

<Typography style={{fontSize:'18px'}}>
                OtherExpenses = ${OtherExpenses}


                </Typography> )} */}
                
            {/* BOL SENT/UNSENT  */}



          {/* </CardContent> */}
      {/* </Collapse> */}
  {/* </Collapse> */}
      </Card>











  );
};

const Expenses = () => {



  const { data, isLoading,refetch } = useGetExpensesQuery();
  const [selectedField, setSelectedField] = useState('');
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLoadData, setNewLoadData] = useState({
    Fuel: 0,
    TractorTrailerWash: 0,
    iftaAdminFee: 0,
    PhoneBill: 0,
    // OccupationalInsurance: 0,
    OccupationalInsurance : 0,
    Doctor: 0,
    Inspection: 0,
    YardPayment: 0,
    RepairMaintanence: 0,
    PayDepositFee: 0,
    TruckPayment: 0,
    TrailerPayment: 0,
    AuthorityInsurance: 0,
    Insurance: 0,
    BasePlate: 0,
    TrailerPlate: 0,
    PermitsAndDrugTesting: 0,
    HeavyVehicleUseTax: 0,
    LumperFee: 0,
    CatScales: 0,
    EZPass: 0,
    PrePass: 0,
    TWIC: 0,
    TicketsAndCitations: 0,
    SFITruckReturns: 0,
    OtherExpenses: 0,


  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [selectedLoad, setSelectedLoad] = useState(null);
   const [selectedLoadId, setSelectedLoadId] = useState(null);

   let myloaadsid = 2

   const [editLoadData, setEditLoadData] = useState({
    _id: "",
    Fuel: 0,
    TractorTrailerWash: 0,
    iftaAdminFee: 0,
    PhoneBill: 0,
    OccupationalInsurance: 0,
    Doctor: 0,
    Inspection: 0,
    YardPayment: 0,
    RepairMaintanence: 0,
    PayDepositFee: 0,
    TruckPayment: 0,
    TrailerPayment: 0,
    AuthorityInsurance: 0,
    Insurance: 0,
    BasePlate: 0,
    TrailerPlate: 0,
    PermitsAndDrugTesting: 0,
    HeavyVehicleUseTax: 0,
    LumperFee: 0,
    CatScales: 0,
    EZPass: 0,
    PrePass: 0,
    TWIC: 0,
    TicketsAndCitations: 0,
    SFITruckReturns: 0,
    OtherExpenses: 0,
  });



  const handleEditLoad = (loadId) => {
    const selectedLoad = data.find((load) => load._id === loadId);
    setSelectedLoadId(loadId);
    setEditLoadData(selectedLoad);
    // editLoadData._id = setSelectedLoad

    // console.log(selectedLoad);
    myloaadsid = loadId

    // console.log(myloaadsid);
    setIsEditModalOpen(true);
  };

  const [deleteExpense, {isSuccess2}] = useDeleteExpenseMutation();

//   const [updateLoad] = useUpdateLoadMutation();
    //   const [createLoadsale] = useCreateLoadsaleMutation();

  const handleSaveLoad = async (editLoadDat) => {
    try {
    // console.log('jatt');

    // await updateLoad({ loadId: selectedLoadId, updatedLoad: editLoadData });
    // console.log(editLoadData);
    // dispatch(updatePost(selectedLoadId, { ...editLoadData }))

    // console.log(myidd);
   
    // console.log(myidd);
      // console.log(editLoadDat);

      await deleteExpense(editLoadDat)


      await createExpense(editLoadDat)

    // console.log(response);
// console.log(selectedLoadId);
      setIsEditModalOpen(false);

      refetch()
    } catch (error) {
      console.log(error);
    }
  };



  
  const [createExpense, {isSuccess}] = useCreateExpenseMutation();

  useEffect(() => {
    if (isSuccess ) {
      // Page refresh after successful post request
      // window.location.reload();
    }
  }, [isSuccess]);



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLoadData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };

  const handleoneInputChange = (field, value) => {
    setNewLoadData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setNewLoadData((prevData) => ({
      ...prevData,
      BOLPDF: file,
    }));
  };
  const handleAddLoad = async () => {
    // console.log(newLoadData);


    // dispatch(createLoad(newLoadData, navigate));
    try {

      // console.log(newLoadData);

      const response = await createExpense(newLoadData);

      // await createLoadsale(newLoadData)
      // console.log(response.data); // Access the created load data


    setNewLoadData({
        Fuel: 0,
        TractorTrailerWash: 0,
        iftaAdminFee: 0,
        PhoneBill: 0,
        OccupationalInsurance: 0,
        Doctor: 0,
        Inspection: 0,
        YardPayment: 0,
        RepairMaintanence: 0,
        PayDepositFee: 0,
        TruckPayment: 0,
        TrailerPayment: 0,
        AuthorityInsurance: 0,
        Insurance: 0,
        BasePlate: 0,
        TrailerPlate: 0,
        PermitsAndDrugTesting: 0,
        HeavyVehicleUseTax: 0,
        LumperFee: 0,
        CatScales: 0,
        EZPass: 0,
        PrePass: 0,
        TWIC: 0,
        TicketsAndCitations: 0,
        SFITruckReturns: 0,
        OtherExpenses: 0,

    });
    setIsModalOpen(false);
    refetch();
  }catch (error) {
    // Handle error
    console.log(error);
  }
};
  
  

  return (
    <Box m="1.5rem 2.5rem">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Header style={{alignSelf: 'flex-start'}} title="Create and Edit Expenses" subtitle="Manage your expenses." />

        {/* <p> Create way to color code paid and unpaid</p> */}

        {/* Green if Paid Else Red */}

        <button style={{alignSelf:'flex-end', backgroundColor: '#aba43c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          // ":hover": {
          //   backgroundColor: "navy",
          //   color: "#ffffff"
          // }
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e3d72d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#aba43c'}
          onClick={handleModalOpen}

          >
             ADD EXPENSE </button>

      </div>
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          
          {data.slice()
          .reverse()
          .map(
            ({
              _id,
              Fuel,
      TractorTrailerWash,
      iftaAdminFee,
      PhoneBill,
      OccupationalInsurance,
      Doctor,
      Inspection,
      YardPayment,
      RepairMaintanence,
      PayDepositFee,
      TruckPayment,
      TrailerPayment,
      AuthorityInsurance,
      Insurance,
      BasePlate,
      TrailerPlate,
      PermitsAndDrugTesting,
      HeavyVehicleUseTax,
      LumperFee,
CatScales,
      EZPass,
      PrePass,
      TWIC,
      TicketsAndCitations,
      SFITruckReturns,
      OtherExpenses,
  createdAt,

            }) => (
              <Expense
                key={_id}
                _id={_id}
               
               
                Fuel = {Fuel}
                TractorTrailerWash = {TractorTrailerWash}
                iftaAdminFee = {iftaAdminFee}
                PhoneBill = {PhoneBill}
                OccupationalInsurance = {OccupationalInsurance}
                Doctor = {Doctor}
                Inspection = {Inspection}
                YardPayment = {YardPayment}
                RepairMaintanence = {RepairMaintanence}
                PayDepositFee = {PayDepositFee}
                TruckPayment = {TruckPayment}
                TrailerPayment = {TrailerPayment}
                AuthorityInsurance = {AuthorityInsurance}
                Insurance = {Insurance}
                BasePlate = {BasePlate}
                TrailerPlate = {TrailerPlate}
                PermitsAndDrugTesting = {PermitsAndDrugTesting}
                HeavyVehicleUseTax = {HeavyVehicleUseTax}
                LumperFee = {LumperFee}
                CatScales = {CatScales}
                EZPass = {EZPass}
                PrePass = {PrePass}
                TWIC = {TWIC}
                TicketsAndCitations = {TicketsAndCitations}
                SFITruckReturns = {SFITruckReturns}
                OtherExpenses = {OtherExpenses}
                
                
                
                
                onEdit = {handleEditLoad}
                createdAt={createdAt}
              />
            )
          )}
        </Box>
      ) : ( 
        <>Loading...</>
      )}

<Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="add-load-modal"
        aria-describedby="add-load-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            
            // width: 400,

            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            minHeight: "40vh",
            maxHeight: "80vh", // Set a fixed maximum height for the modal content
            overflowY: "auto", // Enable vertical scrolling if the content overflows
            minWidth: "40vw"

          }}
        >

            <div style={{ maxHeight: "100%", overflowY: "auto" }} >
          <Typography variant="h1" id="add-load-modal">
            Add New Expense
          </Typography>
         
         
         
{/* Drop Down Method */}



 {/* Drop-down menu for selecting a field */}
 <TextField
      select
      label="Select Field"
      value={selectedField}
      onChange={(e) => setSelectedField(e.target.value)}
      fullWidth
      margin="normal"
    >
 {Object.keys(newLoadData).map((field) => (
        <MenuItem key={field} value={field}>
          {field}
        </MenuItem>
      ))}
    </TextField>


  {/* Textfield for setting the value of the selected field */}
  <TextField
      label="Field Value"
      type="number"
      value={newLoadData[selectedField]}
      onChange={(e) => handleoneInputChange(selectedField, e.target.value)}
      fullWidth
      margin="normal"
    />

















{/* Finish Drop down */}







         {/* start all 28 options  */}
  {/*          


          <TextField
            name="Fuel"
            label="Fuel"
            type="number"

            value={newLoadData.Fuel}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="TractorTrailerWash"
            label="Tractor Trailer Wash"
            type="number"

            value={newLoadData.TractorTrailerWash}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="iftaAdminFee"
            label="IFTA Admin Fee"
            type="number"
            value={newLoadData.iftaAdminFee}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="PhoneBill"
            label="Phone Bill"
            type="number"

            value={newLoadData.PhoneBill}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="OccupationalInsurance"
            label="Occupational Insurace"
            type="number"

            value={newLoadData.OccupationalInsurance}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="Doctor"
            label="Doctor"
            type="number"
            value={newLoadData.Doctor}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="Inspection"
            label="Inspection"
            type="number"

            value={newLoadData.Inspection}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="YardPayment"
            label="Yard Payment"
            type="number"

            value={newLoadData.YardPayment}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

<TextField
            name="RepairMaintanence"
            label="Repair Maintanence"
            type="number"

            value={newLoadData.RepairMaintanence}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          
          <TextField
          name="PayDepositFee"
          label="Pay Deposit Fee"
          type="number"

          value={newLoadData.PayDepositFee}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
        name="TruckPayment"
        label="Truck Payment"
        type="number"

        value={newLoadData.TruckPayment}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
      name="TrailerPayment"
      label="Trailer Payment"
      type="number"

      value={newLoadData.TrailerPayment}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    /><TextField
    name="AuthorityInsurance"
    label="Authority Insurance"
    type="number"

    value={newLoadData.AuthorityInsurance}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
  />
  
  
  <TextField
  name="Insurance"
  label="Insurance"
  type="number"

  value={newLoadData.Insurance}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>



<TextField
            name="BasePlate"
            label="Base Plate"
            type="number"

            value={newLoadData.BasePlate}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          
          <TextField
          name="TrailerPlate"
          label="Trailer Plate"
          type="number"

          value={newLoadData.TrailerPlate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        
        <TextField
        name="PermitsAndDrugTesting"
        label="Permits And Drug Testing"
        type="number"

        value={newLoadData.PermitsAndDrugTesting}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      
      <TextField
      name="HeavyVehicleUseTax"
      label="Heavy Vehicle Use Tax"
      type="number"

      value={newLoadData.HeavyVehicleUseTax}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />

<TextField
  name="LumperFee"
  label="Lumper Fee"
  type="number"

  value={newLoadData.LumperFee}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="CatScales"
  label="CAT Scales"
  type="number"

  value={newLoadData.CatScales}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="EZPass"
  label="EZPass"
  type="number"

  value={newLoadData.EZPass}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="PrePass"
  label="PrePass"
  type="number"

  value={newLoadData.PrePass}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="TWIC"
  label="TWIC"
  type="number"

  value={newLoadData.TWIC}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>

<TextField
  name="TicketsAndCitations"
  label="TicketsAndCitations"
  type="number"

  value={newLoadData.TicketsAndCitations}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="SFITruckReturns"
  label="SFITruckReturns"
  type="number"

  value={newLoadData.SFITruckReturns}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/>
<TextField
  name="OtherExpenses"
  label="OtherExpenses"
  type="number"

  value={newLoadData.OtherExpenses}
  onChange={handleInputChange}
  fullWidth
  margin="normal"
/> 
*/}

{/* Finish all 28 options */}








            {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            {/* <Typography variant="body1" style={{ marginRight: "10px" }}> */}
              {/* BOL PDF: */}
            {/* </Typography> */}
            {/* <TextField
              // type="file"
              // accept="application/pdf"
              name="BOLPDF"
              label="pdf link"
              value={newLoadData.BOLPDF}
              onChange={handleInputChange}
              // style={{ flexGrow: 1 }}
              fullWidth
              margin="normal"

            /> */}
          {/* </div> */}


          </div>

          <Button 
          // variant="contained" 
          style={{marginLeft: '80%', marginTop:'1%'  , backgroundColor: '#aba43c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e3d72d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#aba43c'}
          
          onClick={handleAddLoad}>
            Add Expense
          </Button>
        </Box>
      </Modal>



      <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            maxHeight: "80vh", // Set a fixed maximum height for the modal content
            overflowY: "auto", // 
          }}
        >

<div style={{ maxHeight: "100%", overflowY: "auto" }} >

          <Typography variant="h1" component="h2">
            Edit Expense
          </Typography>
          <TextField
          label="Fuel"
          name="Fuel"
          type="number"
          value={editLoadData.Fuel}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              Fuel: e.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />

<TextField
          label="Tractor Trailer Wash"
          name="TractorTrailerWash"
          type="number"
          value={editLoadData.TractorTrailerWash}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              TractorTrailerWash: e.target.value,
            }))
          }
          fullWidth
            margin="normal"
        />
        <TextField
          label="IFTA AdminFee"
          name="iftaAdminFee"
          type="number"
          value={editLoadData.iftaAdminFee}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              iftaAdminFee: e.target.value,
            }))
          }
          fullWidth
            margin="normal"
        />

<TextField
            name="PhoneBill"
            label="PhoneBill"
            type="number"
            value={editLoadData.PhoneBill}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                PhoneBill: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />

<TextField
            name="OccupationalInsurance"
            label="Occupational Insurance"
            type="number"
            value={editLoadData.OccupationalInsurance}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                OccupationalInsurance: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            name="Doctor"
            label="Doctor"
            type="number"
            value={editLoadData.Doctor}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                Doctor: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
        <TextField
            name="Inspection"
            label="Inspection"
            type="number"

            value={editLoadData.Inspection}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                Inspection: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
         <TextField
            name="YardPayment"
            label="Yard Payment"
            type="number"

            value={editLoadData.YardPayment}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                YardPayment: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
     

     <TextField
              // type="file"
              // accept="application/pdf"
              name="RepairMaintanence"
              label="Repair Maintanence"
            type="number"
              value={editLoadData.RepairMaintanence}
              onChange={(e) =>
                setEditLoadData((prevData) => ({
                  ...prevData,
                  RepairMaintanence: e.target.value,
                }))
              }
              // style={{ flexGrow: 1 }}
              fullWidth
              margin="normal"

            />

<TextField
            name="PayDepositFee"
            label="Pay Deposit Fee"
            type="number"

            value={editLoadData.PayDepositFee}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                PayDepositFee: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="TruckPayment"
            label="TruckPayment"
            type="number"

            value={editLoadData.TruckPayment}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                TruckPayment: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="TrailerPayment"
            label="Trailer Payment"
            type="number"

            value={editLoadData.TrailerPayment}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                TrailerPayment: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="AuthorityInsurance"
            label="Authority Insurance"
            type="number"

            value={editLoadData.AuthorityInsurance}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                AuthorityInsurance: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="Insurance"
            label="Insurance"
            type="number"

            value={editLoadData.Insurance}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                Insurance: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="BasePlate"
            label="Base Plate"
            type="number"

            value={editLoadData.BasePlate}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                BasePlate: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="TrailerPlate"
            label="Trailer Plate"
            type="number"

            value={editLoadData.TrailerPlate}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                TrailerPlate: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="PermitsAndDrugTesting"
            label="Permits And Drug Testing"
            type="number"

            value={editLoadData.PermitsAndDrugTesting}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                PermitsAndDrugTesting: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="HeavyVehicleUseTax"
            label="Heavy Vehicle Use Tax"
            type="number"

            value={editLoadData.HeavyVehicleUseTax}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                HeavyVehicleUseTax: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="LumperFee"
            label="Lumper Fee"
            type="number"

            value={editLoadData.LumperFee}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                LumperFee: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="CatScales"
            label="CatScales"
            type="number"

            value={editLoadData.CatScales}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                CatScales: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="EZPass"
            label="EZPass"
            type="number"

            value={editLoadData.EZPass}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                EZPass: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="PrePass"
            label="PrePass"
            type="number"

            value={editLoadData.PrePass}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                PrePass: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="TWIC"
            label="TWIC"
            type="number"

            value={editLoadData.TWIC}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                TWIC: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="TicketsAndCitations"
            label="Tickets And Citations"
            type="number"

            value={editLoadData.TicketsAndCitations}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                TicketsAndCitations: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="SFITruckReturns"
            label="SFI Truck Returns"
            type="number"

            value={editLoadData.SFITruckReturns}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                SFITruckReturns: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
           <TextField
            name="OtherExpenses"
            label="OtherExpenses"
            type="number"

            value={editLoadData.OtherExpenses}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                OtherExpenses: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          {/* Other input fields for load properties */}

          </div>



          <Button style={{marginLeft: '85%', marginTop:'1%'  , backgroundColor: '#aba43c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e3d72d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#aba43c'}
          onClick={() => handleSaveLoad(editLoadData)}>Save</Button>
        </Box>
      </Modal>

    </Box>
  );
};

export default Expenses;
