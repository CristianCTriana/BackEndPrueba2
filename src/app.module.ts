import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DataModule, MongooseModule.forRoot('mongodb+srv://Cristian:fRNx0XztVcxAGq00@cluster0.vwl0vu8.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
