import mongoose, { Schema } from 'mongoose';

const formDataSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim:true,
        },
        phoneno:{
            type: Number,
            required: true,
            trim: true,
        },
        email:{
            type: String,
            required: true,
            trim: true,
        },
        services:{
            type: String,
            reuired: true,
            trim:true,
        },
        pickupLocation:{
            type:String,
            required:true,
            trim: true,
        },
        dropoffLocation:{
            type: String,
            required: true,
            trim: true,
        },
        numberPax:{
            type: Number,
            required: true,
            trim: true,
        },
        flightDetails:{
            type: String,
            required: true,
            trim: true,
        },
        numberLuggage:{
            type: Number,
            required: true,
            trim: true,
        },
        typeofService:{
            type: String,
            required: true,
            trim: true,
        },
        dateofTransport:{
            type: Date,
            required: true,
            trim: true,
        },
        time:{
            type: Number,
            required: true,
            trim: true,
        },
        message:{
            type: String,
            required: true,
            trim: true,
        },
    },
);

let FormData: any;

if (mongoose.models.FormData) {
    FormData = mongoose.models.FormData;
} else {
    FormData = mongoose.model('FormData', formDataSchema);
}

export default FormData;
