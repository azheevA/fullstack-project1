import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type RegistrationDocument = HydratedDocument<Registration>;
@Schema({ timestamps: true }) 
export class Registration  {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  telegram: string;

}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);