import { Injectable } from '@nestjs/common';

export interface Todo {
  todo: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
