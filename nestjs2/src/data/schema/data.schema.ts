
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DataDocument = HydratedDocument<Data>

@Schema()
export class Data {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  profession: string;

  @Prop({ required: true })
  description: string;

}

export const DataSchema = SchemaFactory.createForClass(Data);
