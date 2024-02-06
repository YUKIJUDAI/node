import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CatsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('我被触发了');
    next();
  }
}
