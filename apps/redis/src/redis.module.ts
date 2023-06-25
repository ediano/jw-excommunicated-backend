import { Module } from '@nestjs/common';
import { RedisController } from '@redis/redis.controller';
import { RedisService } from '@redis/redis.service';

@Module({
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
