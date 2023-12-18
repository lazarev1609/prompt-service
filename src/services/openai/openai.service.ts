import OpenAI from 'openai';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

@Injectable()
export class OpenaiService {
  public openai: OpenAI;

  constructor(private readonly openAI: OpenAI) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async runPrompt(message: string): Promise<string> {
    try {
      const chatCompletion = await this.openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        model: 'gpt-3.5-turbo',
      });

      return chatCompletion.choices[0].message.content;
    } catch (exception) {
      console.error(exception);
      throw new BadRequestException('Failed request to ChatGPT');
    }
  }
}
