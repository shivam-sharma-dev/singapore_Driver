import mongoose, { Schema } from 'mongoose';

// const allowedExtraService = ["Meet & Greeet","Free Waiting Time","Door To Door","Porter Service"];

const subCategorySchema =new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    
    details:

        {
            img:{
                type: String,
                required:true,
                trim: true,
            },
            passengers:{
                type: String,
                required:true,
                trim:true,
            },
            lugggage:{
                type: String,
                required:true,
                trim:true,
            },
            price:{
                type:String,
                required:true,
                trim:true,
            },
            extraServices:[{
                type: String ,
                required: true ,
                trim: true,
                // enum:allowedExtraService,
            }],
            childSeat:{
                type: Boolean,
            },
            boosterSeat:{
                type: Boolean,
            },
            flightNumber:{
                type:Boolean,
            },
            notes:{
                type:Boolean,
            }                
        }
});

// let subCategory: any;

// if (mongoose.models.subCategory) {
//   subCategory = mongoose.models.subCategory;
// } else {
//   subCategory = mongoose.model('SubCategory', subCategorySchema);
// }

// export default subCategory;
const SubCategory= mongoose.models.SubCategory || mongoose.model('SubCategory', subCategorySchema);
export default SubCategory;