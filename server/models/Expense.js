import mongoose from "mongoose";






const ExpenseSchema = new mongoose.Schema({
   
    Fuel: {
        type: Number,
        required: true,
      },

      TractorTrailerWash: {
        type: Number,
        required: true,
      },
      iftaAdminFee: {
        type: Number,
        required: true,
      },
      PhoneBill: {
        type: Number,
        required: true,
      },
      OccupationalInsurance: {
        type: Number,
        required: true,
      }, 
      Doctor: {
        type: Number,
        required: true,
      },
      
      Inspection: {
        type: Number,
        required: true,
      }, 
      YardPayment: {
        type: Number,
        required: true,
      },
      
      RepairMaintanence: {
        type: Number,
        required: true,

      },
      
      PayDepositFee: {
        type: Number,
        required: true,
      },
      
      TruckPayment: {
        type: Number,
        required: true,
      }, 
      
      TrailerPayment: {
        type: Number,
        required: true,
      }, 
      AuthorityInsurance: {
        type: Number,
        required: true,
      },
      
      Insurance: {
        type: Number,
        required: true,
      }, 
      
      BasePlate: {
        type: Number,
        required: true,
      }, 
      TrailerPlate: {
        type: Number,
        required: true,
      },
       PermitsAndDrugTesting: {
        type: Number,
        required: true,
      },
      
      HeavyVehicleUseTax: {
        type: Number,
        required: true,
      }, 
      
      LumperFee: {
        type: Number,
        required: true,
      }, 
      
      CatScales: {
        type: Number,
        required: true,
      },
      
      EZPass: {
        type: Number,
        required: true,
      },
      
      PrePass: {
        type: Number,
        required: true,
      }, 
      
      TWIC: {
        type: Number,
        required: true,
      },
      TicketsAndCitations: {
        type: Number,
        required: true,
      },
      SFITruckReturns: {
        type: Number,
        required: true,
      },
      OtherExpenses: {
        type: Number,
        required: true,
      },
  
  
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Expense = mongoose.model("Expense", ExpenseSchema);
  
  
  export default Expense;
  