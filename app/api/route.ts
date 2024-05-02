
import connectDB from '../../lib/connectDB';
import Category from './models/admin/category';

export async function GET(request,response) {
    try {
        await connectDB();


        return Response.json({"message":"Hello"})

    } catch (err) {
        console.log(err);
        return Response.json({"message":"Hello"})
    }
}

export async function POST(request,response) {
    try {
        await connectDB();

        const formData = await request.json();

        const category =await Category.create({
           name:formData.category 
        })
        console.log(formData);
        return Response.json({"message":"Hello"})

    } catch (err) {
        console.log(err)
        return Response.json({"message":"Hello"})
    }
}
