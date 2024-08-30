import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigAppService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configApp: ConfigAppService = app.get(ConfigAppService);

  const config = new DocumentBuilder()
    .setTitle('Monday API')
    .setDescription('Monday.com API description')
    .setVersion('1.0')
    .build();
  // .addTag('cats')
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configApp.port);
}
bootstrap();
