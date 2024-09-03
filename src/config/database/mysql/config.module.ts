import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [],
})
export class MySqlConfigModule {}
