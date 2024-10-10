import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const useSwaggerModule = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Cats Example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  // create document by app and generate config.
  const document = SwaggerModule.createDocument(app, config);

  // visit path, App Instance, Document.
  SwaggerModule.setup('api', app, document);
};
