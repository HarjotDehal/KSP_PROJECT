import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Expenses from "scenes/expenses";
import Expenselist from "scenes/expenselist";
import ExpenseOverview from "scenes/expenseoverview";
import SignIn from "./SignIn";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // You can implement your authentication logic here.
    // For simplicity, let's assume the user is authenticated if they provide "username" and "password".
    setIsAuthenticated(true);
  };
  useEffect(() => {
    // Your authentication logic here
    // For example, you can check if the user has a valid session token stored in localStorage or a cookie.
    // If the user has a valid session, setIsAuthenticated(true);
    // Otherwise, setIsAuthenticated(false);
    // For now, let's assume the user is not authenticated.
    setIsAuthenticated(false);
  }, []);



  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Routes>
           
              
              <Route element={<Layout />}>

              <Route path="/" element={<Navigate to="/dashboard" replace />} />



              <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />
          
          
          
          
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />


              <Route path="/customers" element={<Customers />} />



              <Route path="/transactions" element={<Transactions />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/allexpenses" element={<Expenselist/>} />
              <Route path="/expenseoverview" element={<ExpenseOverview/>} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
      
            
            
          
          </Routes> */}














<Routes>


            {!isAuthenticated && <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />}

            {isAuthenticated && (
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/allexpenses" element={<Expenselist />} />
                <Route path="/expenseoverview" element={<ExpenseOverview />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/monthly" element={<Monthly />} />
                <Route path="/breakdown" element={<Breakdown />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/performance" element={<Performance />} />
              </Route>
            )}
          </Routes>












        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
