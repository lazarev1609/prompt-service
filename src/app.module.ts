import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../db/database.module';
import { OpenaiModule } from './services/openai/openai.module';
import { PromptsModule } from './services/prompts/prompts.module';
import { CategoryModule } from './services/categories/category.module';

@Module({
  imports: [DatabaseModule, OpenaiModule, PromptsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
