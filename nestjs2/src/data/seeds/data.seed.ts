import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data, DataDocument } from '../schema/data.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DataSeed implements OnModuleInit {
  constructor(
    @InjectModel(Data.name) private dataModel: Model<DataDocument>,
  ) {}

  async onModuleInit() {
    const count = await this.dataModel.countDocuments();

    
    if (count > 0) {
      return;
    }

    const filePath = path.join(
        process.cwd(),
        'src/data/seeds/data.seed.json',
    )
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    await this.dataModel.insertMany(data);
    console.log('Начальные данные добавлены');
  }
}
