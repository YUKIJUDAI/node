import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsMiddleware } from './cats.middleware';

class DefaultService {
  name = '111';
  getName() {
    return '1';
  }
}

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: CatsService,
      useClass: DefaultService,
    },
  ],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CatsMiddleware).forRoutes(CatsController);
  }
}
