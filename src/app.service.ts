import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Heyyy Here is Nest!';
  }
}

// HTTP GET / ---> controller ---> service