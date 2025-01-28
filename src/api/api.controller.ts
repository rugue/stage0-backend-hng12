import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {
  @Get()
  getPublicInfo() {
    return {
      email: 'nehirugue@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/rugue/stage0-backend-hng12',
    };
  }
}
