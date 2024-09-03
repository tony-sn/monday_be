import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MySQLModule } from './provider/database/mysql/provider.module';

@Module({
  imports: [AppConfigModule, MySQLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
