import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { NewData } from './dto/data.dto';
import { DataService } from './data.service';

@Controller('data')
export class DataController {

    constructor(private dataService: DataService){}

    @Post('/create')
    async createPost(@Res() res, @Body() newData: NewData){
        console.log(newData, 'controller');
        //res.status(HttpStatus.OK).json({message: 'Recibido'});

        const data = await this.dataService.createData(newData);
        return res.status(HttpStatus.OK).json({
            message: 'Recibido',
            data: data
        });
    }

}
