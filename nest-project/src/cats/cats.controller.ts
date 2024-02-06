import {
  Bind,
  Body,
  Controller,
  Dependencies,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsPipe } from './cats.pipe';
import { AuthGuard } from './auth/auth.guard';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('joi');

const bodySchema = Joi.object({
  name: Joi.string().required().error(new Error('用户名称不正确')),
  age: Joi.number().required().error(new Error('用户年龄不正确')),
});

@Controller('cats')
@Dependencies(CatsService)
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {
    this.catsService = catsService;
  }

  @Post('/getName')
  @Bind(Body())
//   @UsePipes(new CatsPipe(bodySchema))
  getName() {
    return this.catsService.getName();
  }
}
