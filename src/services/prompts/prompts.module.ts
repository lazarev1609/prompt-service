import { Module } from '@nestjs/common';
import { PromptsController } from './prompts.controller';
import { OpenaiModule } from '../openai/openai.module';

@Module({
  imports: [OpenaiModule],
  controllers: [PromptsController],
  providers: [],
})
export class PromptsModule {}
