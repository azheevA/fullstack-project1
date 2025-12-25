import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Controller('submit-form') 
export class RegistrationController {
  constructor(private readonly registrationsService: RegistrationService) {}

  @Post()
  async submit(@Body() createDto: CreateRegistrationDto) {
    try {
      const result = await this.registrationsService.create(createDto);
      return {
        message: 'Форма успешно отправлена',
        id: result._id.toString(),
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Ошибка при сохранении в базу данных',
      };
    }
  }
}