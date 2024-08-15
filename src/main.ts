import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService, ConfigType } from '@nestjs/config';
import commonConfig, { COMMON_CONFIG } from './config/common.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const config =
    configService.get<ConfigType<typeof commonConfig>>(COMMON_CONFIG);

  await app.listen(config.api_port);
}
bootstrap();
