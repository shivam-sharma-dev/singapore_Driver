import Category from '../models/admin/category';
import subCategory from '../models/admin/subcategory';

import connectDB from "../../../lib/connectDB";

export async function POST(request, response) {
    try {
        const conn = await connectDB();
        console.log(conn)

        const formData = await request.json();

        const category = await Category.create({
            name: formData.name,
        });

        const sub = await subCategory.findOneAndUpdate({ _id: category._id }, {
            $set: { ...formData.subcategories }
        }, { new: true })



        console.log(sub);
        return Response.json({ "data": sub })

    } catch (err) {
        console.log(err)
        return Response.json({ "message": err.message })
    }
}