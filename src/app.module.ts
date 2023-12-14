import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../db/database.module';
import { OpenaiModule } from './services/openai/openai.module';
import { PromptsModule } from './services/prompts/prompts.module';

@Module({
  imports: [DatabaseModule, OpenaiModule, PromptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
