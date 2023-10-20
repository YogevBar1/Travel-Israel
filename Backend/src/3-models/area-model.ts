import { Document, Schema, model } from "mongoose";

// 1. Interface:
export interface IAreaModel extends Document{
    areaName: string;
}

//2.Schema
export const AreaSchema = new Schema <IAreaModel>({
    areaName:{
        type: String,
        required: [true,"Missing area name"]
    }
},{
    versionKey: false
});

//3.Model
export const AreaModel = model<IAreaModel>("AreaModel", AreaSchema, "areas")