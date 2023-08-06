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
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import { useCreateLoadMutation } from "state/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadEditForm from "./loadEditForm";
// import { createLoad } from "actions/loadActions";
import { useUpdateLoadMutation } from "state/api";
import { useDeleteLoadMutation } from "state/api";
import { useCreateLoadsaleMutation } from "state/api";


// import { updatePost } from "actions/loadActions";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  lumper,
  supply,
  stat,
  BOLPDF,
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

  const cardBackgroundClass = rating.toLowerCase() === 'paid' ? 'green-background' : 'red-background';


      return (
      <Card
      sx={{
        backgroundImage: "none",
        borderRadius: "0.55rem",
        '&.green-background': {
          backgroundColor: '#125e2f',
        },

        '&.red-background': {
          backgroundColor: '#6e2121',
        },
      }}
      className={cardBackgroundClass}
      
      // backgroundColor: theme.palette.background.alt, old color
        

      
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
        <Typography variant="h4" component="div">
        Company Name:  {name}


          {/* LOAD COMPANY NAME */}
        </Typography>
        <Typography variant="h5" sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}

          {/* PRICE FOR LOAD $$$3000 etc */}
        </Typography>
        {/* <Rating value={rating} readOnly /> */}
         {/* INVOICE PAID/UNPAID */}
       
       <Typography style={{fontSize:'18px'}}>
        INVOICE:   {rating}

        </Typography>

        <Typography  style={{fontSize:'16px'}}>
          
          
       Load Number:    {description}
        {/* LOAD NUMBER GOES HERE */}
        
        </Typography>
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
      <Collapse
        in={true}
        timeout="auto"
        unmountOnExit
        // sx={{
        //   color: theme.palette.secondary[700],
        // }}
      >
        <CardContent>
          <Typography style={{fontSize:'18px'}}>
            
            {/* id: {_id} */}
            Lumper -  ${Number(lumper).toFixed(2)}
            
            
            </Typography>
          <Typography  style={{fontSize:'18px'}}>
            
            
            {/* Supply Left: {supply} */}

            Pickup : {supply}
            
            
            </Typography>
          <Typography  style={{fontSize:'18px'}}>
            {/* Yearly Sales This Year: {stat.yearlySalesTotal} */}

            Dropoff : {stat}
          </Typography>
          
        </CardContent>
      </Collapse>

      <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See PDFS
        </Button>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
<Typography>
            {/* Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits} */}

         {/* <a href=`file:///C:/Users/Harjot%20D/Downloads/${BOLPDF}`> */}
          
        {/* The PDF is here:   <a href={'file:///C:/Users/Harjot%20D/Downloads/' + BOLPDF} target="_blank"> Your PDF</a> */}

          
           {/* {`file:///C:/Users/Harjot%20D/Downloads/${BOLPDF}`} */}
          {BOLPDF}

            {/* BOL SENT/UNSENT  */}
          </Typography>



  </Collapse>
      </Card>











  );
};

const Products = () => {

  // const navigate = useNavigate();
  const navigate = useNavigate();

  const { data, isLoading,refetch } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLoadData, setNewLoadData] = useState({
    CompanyName: "",
    loadNumber:"",
    loadPrice: 0,
    loadPickup: "",
    loadDropoff: "",
    loadLumper: 0,
    loadBOL: "",
    loadInvoice: "",
    BOLPDF: "",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [selectedLoad, setSelectedLoad] = useState(null);
   const [selectedLoadId, setSelectedLoadId] = useState(null);

   let myloaadsid = 2

   const [editLoadData, setEditLoadData] = useState({
    _id: "",
    CompanyName: "",
    loadNumber:"",
    loadPrice: 0,
    loadPickup: "",
    loadDropoff: "",
    loadLumper: 0,
    loadBOL: "",
    loadInvoice: "",
    BOLPDF: "",
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

  const [deleteLoad, {isSuccess2}] = useDeleteLoadMutation();

  const [updateLoad] = useUpdateLoadMutation();
      const [createLoadsale] = useCreateLoadsaleMutation();

  const handleSaveLoad = async (editLoadDat) => {
    try {
    // console.log('jatt');

    // await updateLoad({ loadId: selectedLoadId, updatedLoad: editLoadData });
    // console.log(editLoadData);
    // dispatch(updatePost(selectedLoadId, { ...editLoadData }))

    // console.log(myidd);
   
    // console.log(myidd);
      // console.log(editLoadDat);

      await deleteLoad(editLoadDat)


      await createLoad(editLoadDat)

    // console.log(response);
// console.log(selectedLoadId);
      setIsEditModalOpen(false);

      refetch()
    } catch (error) {
      console.log(error);
    }
  };



  
  const [createLoad, {isSuccess}] = useCreateLoadMutation();

  useEffect(() => {
    if (isSuccess ) {



      // Page refresh after successful post request
      // window.location.reload();
      

      // navigate('/')
      // setNewLoadData({
      //   CompanyName: "",
      //   loadNumber: "",
      //   loadPrice: 0,
      //   loadPickup: "",
      //   loadDropoff: "",
      //   loadLumper: 0,
      //   loadBOL: "",
      //   loadInvoice: "",
      //   BOLPDF: "",
      // });
   
   
   
   
   
   
    }



  }, [isSuccess]);



  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

      const response = await createLoad(newLoadData);

      // await createLoadsale(newLoadData)
      // console.log(response.data); // Access the created load data


    setNewLoadData({
      CompanyName: "",
      loadNumber:"",
      // loadPrice: "",
      loadPrice: 0,
      loadPickup: "",
      loadDropoff: "",
      loadLumper: 0,
      loadBOL : "",
      loadInvoice:"",
      BOLPDF: "",

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
      <Header style={{alignSelf: 'flex-start'}} title="Create and Edit Loads" subtitle="Manage your loads." />

        {/* <p> Create way to color code paid and unpaid</p> */}


{/* <div style={{alignSelf:"center"}}>Green if Invoice Paid Else Red  </div> */}
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
             ADD LOAD </button>

      </div>

<div style={{textAlign:"center"}}>Green if Invoice Paid Else Red  </div>

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
              CompanyName,
    loadNumber,
    loadPrice,
    loadPickup,
    loadDropoff,
    loadLumper,
    loadBOL,
    loadInvoice,
    BOLPDF,
  createdAt,

            }) => (
              <Product
                key={_id}
                _id={_id}
                name={CompanyName}
                description={loadNumber}
                price={loadPrice}
                rating={loadInvoice}
                category={loadBOL}
                lumper ={loadLumper}
                supply={loadPickup}
                stat={loadDropoff}
                BOLPDF ={BOLPDF}
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
          }}
        >
          <Typography variant="h1" id="add-load-modal">
            Add New Load
          </Typography>
          <TextField
            name="CompanyName"
            label="Company Name"
            value={newLoadData.CompanyName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadNumber"
            label="Load Number"
            value={newLoadData.loadNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadPrice"
            label="Load Price"
            type="number"
            value={newLoadData.loadPrice}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadPickup"
            label="Load Pickup"
            value={newLoadData.loadPickup}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadDropoff"
            label="Load Dropoff"
            value={newLoadData.loadDropoff}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadLumper"
            label="Load Lumper"
            type="number"
            value={newLoadData.loadLumper}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadBOL"
            label="Load BOL"
            value={newLoadData.loadBOL}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadInvoice"
            label="Load Invoice"
            value={newLoadData.loadInvoice}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
            {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            {/* <Typography variant="body1" style={{ marginRight: "10px" }}> */}
              {/* BOL PDF: */}
            {/* </Typography> */}
            <TextField
              // type="file"
              // accept="application/pdf"
              name="BOLPDF"
              label="pdf link"
              value={newLoadData.BOLPDF}
              onChange={handleInputChange}
              // style={{ flexGrow: 1 }}
              fullWidth
              margin="normal"

            />
          {/* </div> */}




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
            Add Load
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
          }}
        >
          <Typography variant="h1" component="h2">
            Edit Load
          </Typography>
          <TextField
          label="Company Name"
          name="CompanyName"
          value={editLoadData.CompanyName}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              CompanyName: e.target.value,
            }))
          }
          fullWidth
          margin="normal"
        />

<TextField
          label="Load Number"
          name="loadNumber"
          value={editLoadData.loadNumber}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              loadNumber: e.target.value,
            }))
          }
          fullWidth
            margin="normal"
        />
        <TextField
          label="Load Price"
          name="loadPrice"
          type="number"
          value={editLoadData.loadPrice}
          onChange={(e) =>
            setEditLoadData((prevData) => ({
              ...prevData,
              loadPrice: e.target.value,
            }))
          }
          fullWidth
            margin="normal"
        />

<TextField
            name="loadPickup"
            label="Load Pickup"
            value={editLoadData.loadPickup}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                loadPickup: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />

<TextField
            name="loadDropoff"
            label="Load Dropoff"
            value={editLoadData.loadDropoff}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                loadDropoff: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            name="loadLumper"
            label="Load Lumper"
            type="number"
            value={editLoadData.loadLumper}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                loadLumper: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
        <TextField
            name="loadBOL"
            label="Load BOL"
            value={editLoadData.loadBOL}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                loadBOL: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
         <TextField
            name="loadInvoice"
            label="Load Invoice"
            value={editLoadData.loadInvoice}
            onChange={(e) =>
              setEditLoadData((prevData) => ({
                ...prevData,
                loadInvoice: e.target.value,
              }))
            }
            fullWidth
            margin="normal"
          />
     

     <TextField
              // type="file"
              // accept="application/pdf"
              name="BOLPDF"
              label="pdf link"
              value={editLoadData.BOLPDF}
              onChange={(e) =>
                setEditLoadData((prevData) => ({
                  ...prevData,
                  BOLPDF: e.target.value,
                }))
              }
              // style={{ flexGrow: 1 }}
              fullWidth
              margin="normal"

            />

          {/* Other input fields for load properties */}




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

export default Products;
