import { Schema } from "mongoose";

export const DataSchema = new Schema({
    name: String,
    materia: String,
    number: String,
    minutes: Number
});

