import React, { useState } from "react";
import { TextField, Button, Typography, Box, AppBar,Toolbar } from "@mui/material";


const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const theme = useTheme();

  const handleSignInClick = () => {

    switch (username) {
      case "shubh":
        if (password === process.env.REACT_APP_SHUBH_PASSWORD) {
          onSignIn();
        } else {
          setError("Invalid username or password");
        }
        break;
      case "harjot":
        console.log(password);
        let p2 = process.env.REACT_APP_HARJOT_PASSWORD
        console.log(p2);
        if (password === p2) {
          onSignIn();
        } else {
          setError("Invalid username or password");
        }
        break;
      case "karan":
        if (password === process.env.REACT_APP_KARAN_PASSWORD) {
          onSignIn();
        } else {
          setError("Invalid username or password");
        }
        break;
      default:
        setError("Invalid username or password");
    }
  
  



  
  
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger the form submission when Enter key is pressed
      handleSignInClick();
    }
  };

  return (


    <>

   
      <Typography variant="h4" style={{ textAlign:"center", marginTop:"5%", fontSize:"76px", color:"#ffda85" }} >
        KSP Transport
      </Typography>
  
    <Box m="1.5rem 2.5rem"> {/* Use the same margins as the Dashboard */}
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4">Sign In</Typography>
        <Box width={300} mt={3}>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            onKeyDown={handleKeyPress} // Handle key press
          />
        </Box>
        <Box width={300} mt={2}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            onKeyDown={handleKeyPress} // Handle key press
          />
        </Box>
        {error && (
          <Typography color="error" mt={1}>
            {error}
          </Typography>
        )}
        <Box width={300} mt={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>

    </>

  );
};

export default SignIn;