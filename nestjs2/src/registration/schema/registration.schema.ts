import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type RegistrationDocument = HydratedDocument<Registration>;
@Schema({ timestamps: true }) 
export class Registration  {
  @Prop({ required: true })
  name: string;

  @Prop()
  contacts: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  telegram: string;

  @Prop({ required: true })
  consent: boolean;

}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);