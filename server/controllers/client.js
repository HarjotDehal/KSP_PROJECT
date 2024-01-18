import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import getCountryIso3 from "country-iso-2-to-3";
import Loadsale from '../models/Loadsale.js'
import Expense from "../models/Expense.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // const productsWithStats = await Promise.all(
    //   products.map(async (product) => {
    //     const stat = await ProductStat.find({
    //       productId: product._id,
    //     });
    //     return {
    //       ...product._doc,
    //       stat,
    //     };
    //   })
    // );
    // // console.log('hi');
    // // print('bitch')

    // res.status(200).json(productsWithStats);
    res.status(200).json(products);


  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export const getExpenses = async(req,res) =>{
try{
  const expenses = await Expense.find();
  res.status(200).json(expenses);


}
catch (error) {
  res.status(404).json({ message: error.message });
}

}

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLoad = async (req, res) => {
  try {
    const { _id, CompanyName, loadNumber, loadPrice, loadPickup, loadDropoff, loadLumper, loadBOL, loadInvoice,BOLPDF } = req.body;

    // Perform any necessary validation or authorization checks before deleting
    // console.log('hidelete');
    // console.log(loadId);

   
    
    // we just need this value to actually equal the loads ID. 
    // console.log(_id);
    await Product.findByIdAndDelete(_id);

    res.json({ message: "Load deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const deleteExpense = async(req,res) =>{
  try {
    const { _id,  Fuel,
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
      OtherExpenses  } = req.body;

    // Perform any necessary validation or authorization checks before deleting
    // console.log('hidelete');
    // console.log(loadId);

   
    
    // we just need this value to actually equal the loads ID. 
    // console.log(_id);
    await Expense.findByIdAndDelete(_id);

    res.json({ message: "Load deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}


export const createLoadsale = async (req,res) =>{

try{

const{CompanyName, loadPrice} = req.body


const newLoadsale = new Loadsale({
  CompanyName,
  loadPrice
});

await newLoadsale.save();

res.status(201).json(newLoadsale)
}
catch (error) {
  console.log(error);
  // Handle error
  res.status(500).json({ error: 'Internal server error' });
}
}



export const createExpense = async(req,res) => {
  try {
    // Get the load data from the request body
    const { Fuel,
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
      OtherExpenses       } = req.body;
    // const BOLPDF = req.file.path

    // console.log(BOLPDF);
    // Create a new load instance using the load model
    const newExpense = new Expense({
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
      OtherExpenses 
    });



    // Save the new load to the database
    await newExpense.save();

    // Send the saved load as the response with status 201 (Created)
    res.status(201).json(newExpense);
  } catch (error) {
    console.log(error);
    // Handle error
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const createLoad = async (req, res) => {
  try {
    // Get the load data from the request body
    const { CompanyName, loadNumber, loadPrice, loadPickup, loadDropoff, loadLumper, loadBOL, loadInvoice,BOLPDF } = req.body;
    // const BOLPDF = req.file.path

    // console.log(BOLPDF);
    // Create a new load instance using the load model
    const newProduct = new Product({
      CompanyName,
      loadNumber,
      loadPrice,
      loadPickup,
      loadDropoff,
      loadLumper,
      loadBOL,
      loadInvoice,
      BOLPDF,
    });



    // Save the new load to the database
    await newProduct.save();

    // Send the saved load as the response with status 201 (Created)
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    // Handle error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// export const updateLoad = async (req, res) => {

//   console.log('hiii');

//   try {
// console.log('hiii');
    
//     const {id_, CompanyName, loadNumber, loadPrice, loadPickup, loadDropoff, loadLumper, loadBOL, loadInvoice } = req.body;

//     const jatt =({
//       CompanyName,
//       loadNumber,
//       loadPrice,
//       loadPickup,
//       loadDropoff,
//       loadLumper,
//       loadBOL,
//       loadInvoice,
//     })
//     // Find the load by ID and update its properties
//     const updatedProduct = await Product.findByIdAndUpdate(
//       id_,
//       jatt,
//       { new: true }
//     );
//     console.log('jatt');

//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

export const updateLoad = async (req, res) => {

// console.log('hi');
  try {
    const { loadId } = req.params;
    const updatedFields = req.body;

    const load = await Product.findById(loadId);

    if (!load) {
      return res.status(404).json({ error: "Load not found" });
    }

    Object.assign(load, updatedFields);

    await load.save();

    res.json(load);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id!')

  try {
    const updatedPost = await Product.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    )

    res.status(200).json(updatedPost)
  } catch (error) {
    //FIXME: check this after, be sure for correct status code returned
    res.status(409).json({ message: error })
  }
}


export const getLoadsales = async(req,res) =>{


try{

  const loadsales = await Loadsale.find();

  // const salesWithStats = await Promise.all(
  //   sales.map(async(sale) =>{

  //     const stat = await 
  //   })
  // )
  res.status(200).json(loadsales)

}
catch (error) {
    res.status(404).json({ message: error.message });
  }

}



export const getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};




export const getAllproducts = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        createdAt: -1,
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};


    // const transactions = await Product.find({
    //   $or: [
    //     { CompanyName: { $regex: new RegExp(search, "i") } },
    //     { loadNumber: { $regex: new RegExp(search, "i") } },
    //     { loadDropoff: { $regex: new RegExp(search, "i") } },
    //     { loadPickup: { $regex: new RegExp(search, "i") } },
    //     { loadInvoice: { $regex: new RegExp(search, "i") } },
        


    //   ],
    // })
      // .sort(sortFormatted)
      // .skip(page * pageSize)
      // .limit(pageSize);



// Option 1, search by year, month or day. NICE



let transactions;
let year;
let month;
let day;
let week;

if (search.includes("week")){
 [week,year, month, day] = search.split("-").map(Number);
}
else{
[year, month, day] = search.split("-").map(Number);

}

if (search.includes("week") && !isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day and the search includes "week", search for dates between the specified day and one week later
  const startDate = new Date(year, month - 1, day);
  const endDate = new Date(year, month - 1, day + 7);

  transactions = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
      { createdAt: { $gte: startDate, $lte: endDate } },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}



 else if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day, search for dates in the specified year, month, and day
  transactions = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    
{
        $expr: {
          $regexMatch: {
            input: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            regex: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
            options: "i",
          },
        },
      },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year) && !isNaN(month)) {
  // If it is a valid year and month but no day in the search, search for all expenses in the specified year and month
  transactions = await Product.find({

    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    
{
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        regex: `${year}-${String(month).padStart(2, "0")}`,
        options: "i",
      },
    },
  },
],

  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year)) {
  // If it is a valid year but no dash in the search, search for all expenses in the specified year
  transactions = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    {
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y", date: "$createdAt" } },
        regex: `${year}`,
        options: "i",
      },
    },
  },
  ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else {
  // If it is not a valid year, month, and day, search all the other fields with $regex as before
  transactions = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    ],

    // Add other fields here for searching
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}










// This is option 2 which lets us pick from a certain month in a year


// Convert the search string to a valid year and month (if it is in a valid format)
// const [year, month] = search.split("-").map(Number);

// let transactions; 
// // Check if the search string is a valid year and month
// if (!isNaN(year) && !isNaN(month) && month >= 1 && month <= 12) {
//   // If it is a valid year and month, search for dates in the specified month and year
//    transactions = await Product.find({
//     $or: [
//       { CompanyName: { $regex: new RegExp(search, "i") } },
//       { loadNumber: { $regex: new RegExp(search, "i") } },
//       { loadDropoff: { $regex: new RegExp(search, "i") } },
//       { loadPickup: { $regex: new RegExp(search, "i") } },
//       { loadInvoice: { $regex: new RegExp(search, "i") } },
//       {
//         $expr: {
//           $regexMatch: {
//             input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
//             regex: `${year}-${String(month).padStart(2, "0")}`,
//             options: "i",
//           },
//         },
//       },
//     ],
//   })
//   .sort(sortFormatted)
//   .skip(page * pageSize)
//   .limit(pageSize);

  
//   ;
// } else {
//   // If it is not a valid year and month, search all the other fields with $regex as before
//    transactions = await Product.find({
    // $or: [
    //   { CompanyName: { $regex: new RegExp(search, "i") } },
    //   { loadNumber: { $regex: new RegExp(search, "i") } },
    //   { loadDropoff: { $regex: new RegExp(search, "i") } },
    //   { loadPickup: { $regex: new RegExp(search, "i") } },
    //   { loadInvoice: { $regex: new RegExp(search, "i") } },
    // ],
//   })
  
//   .sort(sortFormatted)
//   .skip(page * pageSize)
//   .limit(pageSize);
//   ;
// }


// OPTION 3. lets us pick from a month or year



// Convert the search string to a valid date object (if it is in a valid date format)
// const searchDate = new Date(search);

// let transactions;

// // Check if the search string is a valid date
// if (!isNaN(searchDate)) {
//   // If it is a valid date, check if it contains both year and month
//   const year = searchDate.getFullYear();
//   const month = searchDate.getMonth() + 1;

//   if (!isNaN(month) && month >= 1 && month <= 12) {
//     // If it contains both year and month, search for dates in the specified month and year
//     transactions = await Product.find({
//       $or: [
//         { CompanyName: { $regex: new RegExp(search, "i") } },
//         { loadNumber: { $regex: new RegExp(search, "i") } },
//         { loadDropoff: { $regex: new RegExp(search, "i") } },
//         { loadPickup: { $regex: new RegExp(search, "i") } },
//         { loadInvoice: { $regex: new RegExp(search, "i") } },
//         {
//           $expr: {
//             $and: [
//               { $eq: [{ $year: "$createdAt" }, year] },
//               { $eq: [{ $month: "$createdAt" }, month] },
//             ],
//           },
//         },
//       ],
//     }).sort(sortFormatted)
//     .skip(page * pageSize)
//     .limit(pageSize);
//     ;
//   } else {
//     // If it contains only the year, search for all dates in the specified year
//     transactions = await Product.find({
//       $or: [
//         { CompanyName: { $regex: new RegExp(search, "i") } },
//         { loadNumber: { $regex: new RegExp(search, "i") } },
//         { loadDropoff: { $regex: new RegExp(search, "i") } },
//         { loadPickup: { $regex: new RegExp(search, "i") } },
//         { loadInvoice: { $regex: new RegExp(search, "i") } },
//         {
//           $expr: {
//             $and: [
//               { $gte: ["$createdAt", new Date(`${year}-01-01T00:00:00.000Z`)] },
//               { $lt: ["$createdAt", new Date(`${year + 1}-01-01T00:00:00.000Z`)] },
//             ],
//           },
//         },
//       ],
//     })
//     .sort(sortFormatted)
//       .skip(page * pageSize)
//       .limit(pageSize);
//     ;
//   }
// } else {
//   // If it is not a valid date, search all the other fields with $regex as before
//   transactions = await Product.find({
//     $or: [
//       { CompanyName: { $regex: new RegExp(search, "i") } },
//       { loadNumber: { $regex: new RegExp(search, "i") } },
//       { loadDropoff: { $regex: new RegExp(search, "i") } },
//       { loadPickup: { $regex: new RegExp(search, "i") } },
//       { loadInvoice: { $regex: new RegExp(search, "i") } },
//     ],
//   }).sort(sortFormatted)
//   .skip(page * pageSize)
//   .limit(pageSize);;
// }

// Rest of the function continues here, and you can use 'transactions' as needed







    const total = await Product.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};




export const getAllexpenses = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        createdAt: -1,

      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};



// Best option, this allows us to search for a specific month, year or day



let transactions;
let year;
let month;
let day;
let week;

if (search.includes("week")){
 [week,year, month, day] = search.split("-").map(Number);
}
else{
[year, month, day] = search.split("-").map(Number);

}

if (search.includes("week") && !isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day and the search includes "week", search for dates between the specified day and one week later
  const startDate = new Date(year, month - 1, day);
  const endDate = new Date(year, month - 1, day + 7);

  transactions = await Expense.find({
    createdAt: { $gte: startDate, $lte: endDate }
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} 


  else if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day, search for dates in the specified year, month, and day
  transactions = await Expense.find({
    $or: [
      {
        $expr: {
          $regexMatch: {
            input: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            regex: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
            options: "i",
          },
        },
      },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year) && !isNaN(month)) {
  // If it is a valid year and month but no day in the search, search for all expenses in the specified year and month
  transactions = await Expense.find({
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        regex: `${year}-${String(month).padStart(2, "0")}`,
        options: "i",
      },
    },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year)) {
  // If it is a valid year but no dash in the search, search for all expenses in the specified year
  transactions = await Expense.find({
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y", date: "$createdAt" } },
        regex: `${year}`,
        options: "i",
      },
    },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else {
  // If it is not a valid year, month, and day, search all the other fields with $regex as before
  transactions = await Expense.find({
    // Add other fields here for searching
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}











    // Option 1 this allows us to just search for expenses from a certain month. 

// const [year, month] = search.split("-").map(Number);

// let transactions; 

// if (!isNaN(year) && !isNaN(month) && month >= 1 && month <= 12) {
//   // If it is a valid year and month, search for dates in the specified month and year
//    transactions = await Expense.find({
//     $or: [
      
//       {
//         $expr: {
//           $regexMatch: {
//             input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
//             regex: `${year}-${String(month).padStart(2, "0")}`,
//             options: "i",
//           },
//         },
//       },
//     ],
//   })
//   .sort(sortFormatted)
//   .skip(page * pageSize)
//   .limit(pageSize);

  
//   ;
// } else {
//   // If it is not a valid year and month, search all the other fields with $regex as before
//    transactions = await Expense.find()
  
//   .sort(sortFormatted)
//   .skip(page * pageSize)
//   .limit(pageSize);
//   ;
// }

// Finish option 1





// option 2 with no search ability


    // const transactions = await Expense.find({
   
    // })
    //   .sort(sortFormatted)
    //   .skip(page * pageSize)
    //   .limit(pageSize);





    const total = await Expense.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export const getAllexpensesandproducts = async(req,res) =>{


  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        createdAt: -1,
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};





let transactions2;
let year;
let month;
let day;
let week;

if (search.includes("week")){
 [week,year, month, day] = search.split("-").map(Number);
}
else{
[year, month, day] = search.split("-").map(Number);

}
// console.log(year, month, day);


if (search.includes("week") && !isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day and the search includes "week", search for dates between the specified day and one week later
  const startDate = new Date(year, month - 1, day);
  const endDate = new Date(year, month - 1, day + 7);

  transactions2 = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
      { createdAt: { $gte: startDate, $lte: endDate } },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}
else if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day, search for dates in the specified year, month, and day
  transactions2 = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    
{
        $expr: {
          $regexMatch: {
            input: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            regex: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
            options: "i",
          },
        },
      },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year) && !isNaN(month)) {
  // If it is a valid year and month but no day in the search, search for all expenses in the specified year and month
  transactions2 = await Product.find({

    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    
{
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        regex: `${year}-${String(month).padStart(2, "0")}`,
        options: "i",
      },
    },
  },
],

  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year)) {
  // If it is a valid year but no dash in the search, search for all expenses in the specified year
  transactions2 = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    {
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y", date: "$createdAt" } },
        regex: `${year}`,
        options: "i",
      },
    },
  },
  ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else {
  // If it is not a valid year, month, and day, search all the other fields with $regex as before
  transactions2 = await Product.find({
    $or: [
      { CompanyName: { $regex: new RegExp(search, "i") } },
      { loadNumber: { $regex: new RegExp(search, "i") } },
      { loadDropoff: { $regex: new RegExp(search, "i") } },
      { loadPickup: { $regex: new RegExp(search, "i") } },
      { loadInvoice: { $regex: new RegExp(search, "i") } },
    ],

    // Add other fields here for searching
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}



let transactions3;

// console.log(week,year, month, day);

if (search.includes("week") && !isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day and the search includes "week", search for dates between the specified day and one week later
  const startDate = new Date(year, month - 1, day);
  const endDate = new Date(year, month - 1, day + 7);

  transactions3 = await Expense.find({
    createdAt: { $gte: startDate, $lte: endDate }
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} 
else if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  // If it is a valid year, month, and day, search for dates in the specified year, month, and day
  transactions3 = await Expense.find({
    $or: [
      {
        $expr: {
          $regexMatch: {
            input: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            regex: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
            options: "i",
          },
        },
      },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year) && !isNaN(month)) {
  // If it is a valid year and month but no day in the search, search for all expenses in the specified year and month
  transactions3 = await Expense.find({
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        regex: `${year}-${String(month).padStart(2, "0")}`,
        options: "i",
      },
    },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else if (!isNaN(year)) {
  // If it is a valid year but no dash in the search, search for all expenses in the specified year
  transactions3 = await Expense.find({
    $expr: {
      $regexMatch: {
        input: { $dateToString: { format: "%Y", date: "$createdAt" } },
        regex: `${year}`,
        options: "i",
      },
    },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
} else {
  // If it is not a valid year, month, and day, search all the other fields with $regex as before
  transactions3 = await Expense.find({
    // Add other fields here for searching
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);
}




const total3 = await Expense.countDocuments({
  name: { $regex: search, $options: "i" },
});









const total2 = await Product.countDocuments({
  name: { $regex: search, $options: "i" },
});







res.status(200).json({
  transactions2,
  total2,
  transactions3,
  total3,
});
} catch (error) {
res.status(404).json({ message: error.message });
}
};






export const getAllexpensesandproductsmonthly = async(req,res)=>{

  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 365, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        createdAt: -1,

      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

// I need to create start and end dates for each month



// This controller will return 24 different things. It will return a product list for each month and a expense list for each month

const monthlyExpenses = [];
const monthlyProducts = [];

for (let month = 1; month <= 12; month++) {
  const year = new Date().getFullYear(); // Use the current year
  const startDate = new Date(2023, month - 1, 1); // Start date of the month
  const endDate = new Date(2023, month, 0); // End date of the month (last day)

  // Fetch expenses for the current month
  const expenses = await Expense.find({
    createdAt: { $gte: startDate, $lte: endDate },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);

  // Fetch products for the current month
  const products = await Product.find({
    createdAt: { $gte: startDate, $lte: endDate },
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);

  // Add the fetched expenses and products to their respective arrays
  monthlyExpenses.push(expenses);
  monthlyProducts.push(products);
}


// console.log(monthlyExpenses);
// console.log(monthlyProducts);


res.status(200).json({
  
  januaryE: monthlyExpenses[0],
      februaryE: monthlyExpenses[1],
      marchE: monthlyExpenses[2],
      aprilE: monthlyExpenses[3],
      mayE: monthlyExpenses[4],
      juneE: monthlyExpenses[5],
      julyE: monthlyExpenses[6],
      augustE: monthlyExpenses[7],
      septemberE: monthlyExpenses[8],
      octoberE: monthlyExpenses[9],
      novemberE: monthlyExpenses[10],
      decemberE: monthlyExpenses[11],
// write all 12 month expenses


januaryP: monthlyProducts[0],
februaryP: monthlyProducts[1],
marchP: monthlyProducts[2],
aprilP: monthlyProducts[3],
mayP: monthlyProducts[4],
juneP: monthlyProducts[5],
julyP: monthlyProducts[6],
augustP: monthlyProducts[7],
septemberP: monthlyProducts[8],
octoberP: monthlyProducts[9],
novemberP: monthlyProducts[10],
decemberP: monthlyProducts[11],
// write all 12 month products


});



  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};





export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
