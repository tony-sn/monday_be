import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import configuration from './configuration';
import { ConfigAppService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigAppService],
})
export class MySqlConfigModule {}
