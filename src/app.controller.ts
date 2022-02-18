import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') // ถ้าไม่ใส่จะอยู่ที่ root path ถ้าใส่จะต้องใส้ path /(ชื่อในวงเล็บ)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // ถ้าไม่ใส่ก็จะอยู่ที่ /app ถ้าใส้จะต้องเข้าไปที่ /app/(ชื่อในวงเล็บ)
  getHello(): string {
    return this.appService.getHello();
  }
}
