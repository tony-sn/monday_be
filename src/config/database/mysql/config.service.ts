import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get port() {
    return this.configService.get<string>('database.port');
  }

  get host() {
    return this.configService.get<string>('database.host');
  }
  get username() {
    return this.configService.get<string>('database.username');
  }
  get password() {
    return this.configService.get<string>('database.password');
  }

  get database() {
    return this.configService.get<string>('database.database');
  }
}
