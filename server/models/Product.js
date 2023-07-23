import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema(
//   {
//     name: String,
//     price: Number,
//     description: String,
//     category: String,
//     rating: Number,
//     supply: Number,
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", ProductSchema);
// export default Product;




const ProductSchema = new mongoose.Schema({
  CompanyName: {
    type: String,
    required: true,
  },
  loadNumber: {
    type: String,
    required: true,
  },
  loadPrice: {
    type: Number,
    required: true,
  },
  loadPickup: {
    type: String,
    required: true,
  },
  loadDropoff: {
    type: String,
    required: true,
  },
  loadLumper: {
    type: Number,
    required: true,
  },
  loadBOL: {
    type: String,
    required: true,
  },
  loadInvoice: {
    type: String,
    required: true,
  },
  // BOLPDF: {
  //   type: String, // Assuming the BOLPDF is stored as a file path or URL
  //   required: true,
  // },
  // BOLPDF : String,

  BOLPDF: {
    type: String,
    required: true,
  },


  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);


export default Product;


