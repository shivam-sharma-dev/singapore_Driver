import mongoose, { Schema } from 'mongoose';

const {ObjectId} = mongoose.Types



const categorySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },

        subcategories:{
            type:[ObjectId],
            ref:"SubCategory"
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
