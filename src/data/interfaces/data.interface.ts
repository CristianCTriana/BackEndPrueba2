import { Document } from "mongoose"

export interface Data extends Document{
    name: string;
    number: string;
    materia: string;
    minutes: number;
}