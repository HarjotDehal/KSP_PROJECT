// color design tokens export



// this has our color schemes which we can change around whenever. Color layout honestly up to shubh

export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  // primary: {
  //   // red
  //   100: "#FFCDD2",
  //   200: "#EF9A9A",
  //   300: "#E57373",
  //   400: "#F44336",
  //   500: "#8B0000 ",
  //   600: "#8B0000 ", // manually adjusted
  //   700: "#8B0000 ",
  //   800: "#C62828",
  //   900: "#8B0000  ",
  // },
  secondary: {
    // // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",


  //   // emarald green
  //   50: "#f7f7f7", // lightest shade
  // 100: "#ecf9e4",
  // 200: "#def3c5",
  // 300: "#d1ec9f",
  // 400: "#c4e676",
  // 500: "#b7e04e",
  // 600: "#9bcc39",
  // 700: "#80b826",
  // 800: "#65a413",
  // 900: "#4b8f00", // darkest shade



  // maroon
  // 50: "#f7d5d9", // lightest shade
  // 100: "#efacb4",
  // 200: "#e7828f",
  // 300: "#df596a",
  // 400: "#d83145",
  // 500: "#c9263e",
  // 600: "#ab2238",
  // 700: "#901d32",
  // 800: "#75192c",
  // 900: "#5a1426", // darkest shad


  // orange
  // 50: "#fff5e0", // lightest shade
  // 100: "#ffe0b3",
  // 200: "#ffcc80",
  // 300: "#ffb74d",
  // 400: "#ffa726",
  // 500: "#ff9800",
  // 600: "#fb8c00",
  // 700: "#f57c00",
  // 800: "#ef6c00",
  // 900: "#e65100", // darkest shade
},
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[400],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {

              default: tokensDark.primary[600],


              
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
            
              // this does like nothing. 
            
              main: tokensDark.grey[50],
            
            
            
              // behind our data tables. 
              light: tokensDark.grey[300],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
            
            
              // behind main background. Also behind charts
            
              default:  tokensDark.grey[300],
             
             
            //  behind sidebars and stuff
             
              alt: tokensDark.grey[200],
            
            
            
            //   default: tokensDark.grey[300],
             
             
            // //  behind sidebars and stuff
             
            //   alt: tokensDark.grey[200],
            
            
            },
            }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};



// original light mode 

// primary: {
//   ...tokensLight.primary,

//   // this does like nothing. 

//   main: tokensDark.grey[50],



//   // behind our data tables. 
//   light: "tokensDark.grey[100]",
// },
// secondary: {
//   ...tokensLight.secondary,
//   main: tokensDark.secondary[600],
//   light: tokensDark.secondary[700],
// },
// neutral: {
//   ...tokensLight.grey,
//   main: tokensDark.grey[500],
// },
// background: {


//   // behind main background. Also behind charts

//   default: tokensDark.grey[0],
 
 
// //  behind sidebars and stuff
 
//   alt: tokensDark.grey[50],
// },
// }),












// attempt

//  primary: {
//               ...tokensLight.primary,

//               // this does like nothing. 

//               main: "#d47faf",



//               // behind our data tables. Not on the front page tho. 
//               light: "#a85283",
//             },
//             secondary: {

//               // this might be the lettering
//               ...tokensLight.secondary,
//               main: "#c78b16",


//               // this is used for some lettering on main page. Small lettering. 
//               light: "tokensDark.secondary[700]",
//             },
//             neutral: {

//               // this might be the lettering

//               ...tokensLight.grey,
//               main: "c78b16",
//             },
//             background: {


//               // behind main background. Also behind charts

//               default: "#69490a",
             
             
//             //  behind sidebars and stuff on our main page. 
             
//               alt: "#c78b16",
//             },
//           }),