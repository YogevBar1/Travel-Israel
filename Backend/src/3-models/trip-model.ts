import mongoose, { Document, ObjectId, Schema, model } from "mongoose";
import { AreaModel } from "./area-model";

// 1. Interface:
export interface ITripModel extends Document{
    tripName: string;
    tripDescription: string;
    areaId: mongoose.Schema.Types.ObjectId;
    priceAdult: number;
    priceKid: number;
}

//2.Schema
export const TripSchema = new Schema <ITripModel>({
    tripName:{
        type: String,
        required: [true,"Missing trip name"]
    },
    tripDescription: {
        type: String,
        required: [true, "Missing trip Description."]
    },
    areaId: {
        type: mongoose.Schema.Types.ObjectId
    },
    priceAdult: {
        type: Number,
        required: [true, "Missing priceAdult."]
    },
    priceKid: {
        type: Number,
        required: [true, "Missing priceKid."]
    }

},{
    versionKey: false, // don't add __v to an added document.
    toJSON: { virtuals: true }, // Return foreign key in JSON.
    id: false // Don't add id on top of _id.
});

TripSchema.virtual("areas", {
    ref: AreaModel, // Foreign Model.
    localField: "areaId", // foreign key.
    foreignField: "_id", // primary key.
    justOne: true // Shop has one category.
});

//3.Model
export const TripModel = model<ITripModel>("TripModel", TripSchema, "trips")