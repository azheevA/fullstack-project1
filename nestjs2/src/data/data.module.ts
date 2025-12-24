import { Module } from "@nestjs/common";
import { DataService } from "./data.service";
import { DataController } from "./data.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Data, DataSchema } from "./schema/data.schema";
import { DataSeed } from "./seeds/data.seed";

@Module({
  controllers: [DataController],
  providers: [DataService, DataSeed],
  imports: [
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
})
  
export class DataModule {}
