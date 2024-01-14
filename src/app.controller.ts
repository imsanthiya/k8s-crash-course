import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LongPathResponseDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('a/long/path')
  async getLongPathResponse(): Promise<LongPathResponseDto> {
    const resp = new LongPathResponseDto();
    resp.timestamp = new Date();
    resp.status = 'ok';
    resp.data = {
      payload: 'hello',
    };
    return resp;
  }
}
