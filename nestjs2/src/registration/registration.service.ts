import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name) 
    private registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(createDto: CreateRegistrationDto): Promise<RegistrationDocument> {
   
    const createdRegistration = new this.registrationModel(createDto);
    
  
    return await createdRegistration.save();
  }
}