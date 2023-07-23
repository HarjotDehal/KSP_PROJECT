import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  createLoad,
  updateLoad,
  deleteLoad,
  getLoadsales,
  createLoadsale,
  getAllproducts,
  createExpense,
  getExpenses,
  deleteExpense,
  getAllexpenses,
  getAllexpensesandproducts,
  getAllexpensesandproductsmonthly,

} from "../controllers/client.js";

import upload from "../middleware/multerConfig.js";


const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.get('/expenses',getExpenses);


router.post('/loads',  createLoad);

router.post('/newloadsale',createLoadsale)

router.post('/newexpense',createExpense)

router.get('/loadsales',getLoadsales)
// router.put('/loads/:loadId',updateLoad)


// router.delete('/loads:loadId', deleteLoad)
router.delete('/loads/delete',deleteLoad)

router.delete('/expenses/delete',deleteExpense)

// router.patch('/loads/:loadId',updateLoad)

router.get("/allproducts",getAllproducts)

router.get('/allexpenses',getAllexpenses)

router.get('/allexpensesandproducts',getAllexpensesandproducts)

router.get('/allexpensesandproductsmonthly',getAllexpensesandproductsmonthly)


export default router;