import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: 'http://localhost:5000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,         
    forbidNonWhitelisted: true, 
    transform: true,  
    transformOptions: { enableImplicitConversion: true }
  }));
  
  const config = new DocumentBuilder()
      .setTitle('My API')
      .setDescription('Описание моего API для сущности Datum')
      .setVersion('1.0')
      .addTag('datum') 
      .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
    
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server started on port ${process.env.PORT ?? 3000}`);
  });
}
bootstrap();
