import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const ServerConfig = config.get('server');
  const PORT = process.env.PORT || ServerConfig.port;

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    logger.debug('CORS Enabled');
    app.enableCors(); // enables CORS
  }

  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
}

bootstrap();
