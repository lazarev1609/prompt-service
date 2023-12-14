import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import OpenAI from 'openai';

@Module({
  providers: [OpenaiService, OpenAI],
  exports: [OpenaiService],
})
export class OpenaiModule {}
