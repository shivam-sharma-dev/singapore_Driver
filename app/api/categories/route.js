import Category from '../models/admin/category';
import subCategory from '../models/admin/subcategory';

import connectDB from "../../../lib/connectDB";

export async function POST(request, response) {
    try {
        await connectDB();

        const formData = await request.json();

        const category = await Category.create({
            name: formData.name,
        });

        const sub = await subCategory.create({
            name:formData.subCategory[0],
            details:
        })
        /*
        "subcategories":[
        {
            "name":"economy",
            "details":{
                "img":"https://localhost.com",
                "passengers":"4",
                "luggage":"unlimited",
                "price":"70",
                "extraServices":["hy","hello"],
                "childSeat":"true",
                "boosterSeat":"false",
                "flightNumber":"true",
                "notes":"false"
            }
        }
    ]
        
        */

        // const updateSub = await Category.findByIdAndUpdate({_id: category._id},
        //     $set: { ...subCategory._id },
        //     {});



        console.log(sub);
        return Response.json({ "data": sub })

    } catch (err) {
        console.log(err)
        return Response.json({ "message": err.message })
    }
}