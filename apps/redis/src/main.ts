import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RedisModule } from './redis.module';

async function bootstrap() {
  const app = await NestFactory.create(RedisModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'redis',
      port: 6379,
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3334);
}
bootstrap();
