import mongoose from "mongoose";




const LoadsaleSchema = new mongoose.Schema(



    {

        CompanyName: String,

        loadPrice: Number,
                
        createdAt: {
            type: Date,
            default: Date.now,
          },

    }
)



const Loadsale = mongoose.model("Loadsale", LoadsaleSchema);


export default Loadsale;