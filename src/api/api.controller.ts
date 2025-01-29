import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  @HttpCode(200)
  getPublicInfo() {
    return {
      email: 'nehirugue@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/rugue/stage0-backend-hng12.git',
    };
  }
}
