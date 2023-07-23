import React from "react";

// most of this stuff is self explanatory tbh

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
// import { css } from '@mui/system';

import { styled } from '@mui/material/styles'; // Import styled function

// these are all symbols which I can change later If I want to. Just have to check documentation


import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Create and Edit",
    icon: null,
  },
  {
    text: "Create Loads",
    icon: <ShoppingCartOutlined />,
  },

  {
    text: "Create Expense",
    icon: <ReceiptLongOutlined />,
  },
  
  {
    text: "Logs and Overview",
    icon: null,
  },

  {
    text: "Load List",
    icon: <ReceiptLongOutlined />,
  },
  
  

  {
    text: "Expense List",
    icon: <Groups2Outlined />,
  },

  {
    text: "Expense Overview",
    icon: <Groups2Outlined />,
  },



  // {
  //   text: "Customers",
  //   icon: <Groups2Outlined />,
  // },


  // {
  //   text: "Geography",
  //   icon: <PublicOutlined />,
  // },

 
  {
    text: "Charts",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  // {
  //   text: "Daily",
  //   icon: <TodayOutlined />,
  // },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Members",
    icon: <AdminPanelSettingsOutlined />,
  },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />,
  // },
];




const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
// navigates to other pages. 

  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);


//   const pulseAnimation = css`
// @keyframes pulseAnimation {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// `;
// const pulseAnimation = `
// @keyframes pulseAnimation {
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// `;
const LogoLink = styled("a")({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
  fontSize: '22px',
  fontWeight: 'bold',
  "&:hover": {
    color: theme.palette.primary.main,
  },
   // Apply the pulse animation
});



  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              
            },
          }}
        >


          {/* This is our second section of the sidebar. It just has all the sidebar sections.  */}
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    {/* not sure what this is but I can just change it to ksp transport I guess */}
                  
                   {/* <a href="/dashboard"   
                   style={{textDecoration:'none', 
                   color:theme.palette.secondary.main, 
                   fontSize:'22px', 
                   fontWeight:'bold',
                   ...pulseAnimation,
                   "&:hover": {
                    color: theme.palette.primary.main,},
                   }}>
                    
                    KSP Transport </a>  */}
<LogoLink href="/dashboard">
                      KSP Transport
                    </LogoLink>
                   {/* KSP Transport */}
                    {/* logo and title */}
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />

{/* this is a way to close the menu */}
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {/* makes all the nav items which we listed above */}
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{fontSize:'18px',fontWeight:'bold',  m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                let lcText = text.toLowerCase();

                if (lcText == 'create loads'){
                  lcText= 'products'
                }

                if (lcText=='load list'){
                  lcText = 'transactions'
                }

                if(lcText === 'expense list'){
                  lcText ='allexpenses'
                }
                if(lcText === 'create expense'){
                  lcText ='expenses'
                }

                if(lcText === 'expense overview'){
                  lcText ='expenseoverview'
                }

                if(lcText === 'members'){
                  lcText ='admin'
                }
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);

                        // navigates to new url with undercased addition to url
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
