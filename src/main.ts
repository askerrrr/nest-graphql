import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module/app.module';
import { ConsoleLogger } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      colors: true,
      timestamp: false,
      logLevels: ['error', 'fatal', 'warn'],
    }),
  });
  await app.listen(3000);
})();
