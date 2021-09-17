import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



//this decorator Controller does not filter a path
// => only your-domain.com/ will trigger the @Get() below
@Controller('path')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('path2')
  getHello(): string {
    return this.appService.getHello();
  }
}
