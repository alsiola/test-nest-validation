import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { BodyDTO } from './body.dto';

@Controller()
export class AppController {
  @Post('/broken')
  broken(@Body() body: BodyDTO) {
    return body;
  }

  @Post('/works')
  works(@Body(ValidationPipe) body: BodyDTO) {
    return body;
  }
}
