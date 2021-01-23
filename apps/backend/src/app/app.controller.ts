import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { AppDTO } from "./app.dto";

@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidUnknownValues: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  })
)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): AppDTO {
    return this.appService.getData();
  }
}
