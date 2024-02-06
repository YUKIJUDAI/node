import { Controller, Dependencies, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService;
  }

  @Post()
  getHello() {
    return this.appService.getHello();
  }
}
