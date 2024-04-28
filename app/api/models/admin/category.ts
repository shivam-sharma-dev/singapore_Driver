import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        subcategories: [
          {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            details: [
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
                    extraServices:[
                        {
                        type: String ,
                        required: true ,
                        trim: true
                        },
                    ]
                }            
            ]
          }
        ],
        
        childSeat:{
            type: Boolean,
        },
        boosterSeat:{
            type: Boolean,
        },
    },
);

let Category: any;

if (mongoose.models.Category) {
  Category = mongoose.models.Category;
} else {
  Category = mongoose.model('Category', categorySchema);
}

export default Category;
