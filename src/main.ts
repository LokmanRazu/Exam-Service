import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Exam Service API DOCS')
  .setDescription('The Exam API description')
  .setVersion('1.0')
  .addTag('Exam')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);
let port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`${ await app.getUrl()}`)
}
bootstrap();
