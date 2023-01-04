import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewData } from './dto/data.dto';
import { Data } from './interfaces/data.interface';

@Injectable()
export class DataService {

    constructor(@InjectModel('Data') private dataModel: Model<Data>){}

    async createData(newData: NewData): Promise<Data>{
        console.log(newData, 'service');
        const data = new this.dataModel(newData);
        await data.save();
        return data;
    }
}
