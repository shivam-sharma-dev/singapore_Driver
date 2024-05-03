import connectDB from '../../../lib/connectDB';
import Category from '../models/admin/category';
import SubCategory from '../models/admin/subcategory';

export async function POST(request, response) {
  try {
    await connectDB();

    const formData = await request.json();

    const { name: n1, subcategories } = formData;
    const { name } = subcategories[0]; // this should be dynamic
    const {
      img,
      passengers,
      luggage,
      price,
      extraServices,
      childSeat,
      boosterSeat,
      flightnumber,
      notes,
    } = subcategories[0].details;
    // console.log(
    //   n1,
    //   name,
    //   img,
    //   passengers,
    //   luggage,
    //   price,
    //   extraServices,
    //   childSeat,
    //   boosterSeat,
    //   flightnumber,
    //   notes
    // );

    // create category
    const category = await Category.create({
      name: formData.name,
    });

    for (let index = 0; index < subcategories.length; index++) {
      const element = subcategories[index];
      //   console.log('el', element);

      const subcc = SubCategory.create({
        name: element.name,
        details: {
          img: element.details.img,
          passengers: element.details.passengers,
          luggage: element.details.luggage,
          price: element.details.price,
          extraServices: element.details.extraServices,
          childSeat: element.details.childSeat,
          boosterSeat: element.details.boosterSeat,
          flightnumber: element.details.flightnumber,
          notes: element.details.notes,
        },
      })
        .then(async (res) => {
          //   console.log('res', res);

          await Category.findOneAndUpdate(
            { _id: category._id },
            { $push: { subcategories: res._id } },
            { new: true }
          );
        })
        .catch((err) => {
          console.log('err', err);
        });
    }

    // console.log(await subc);
    return Response.json({ data: 'sub' });
  } catch (err) {
    console.log(err);
    return Response.json({ message: err.message });
  }
}
