import OpenAI from 'openai';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class OpenaiService {
  public openai: OpenAI;

  constructor(private readonly openAI: OpenAI) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async chatGptRequest(): Promise<unknown[]> {
    try {
      const chatCompletion = await this.openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });

      console.log('>>>>', chatCompletion.choices);
      return chatCompletion.choices;
    } catch (e) {
      // Log and propagate the error
      console.error(e);
      throw new BadRequestException('Failed request to ChatGPT');
    }
  }

  // async generateImage(text: string): Promise<string> {
  //   try {
  //     // Make a request to the DALL-E model for image generation
  //     const { data } = await this.openai.images.generate({
  //       model: 'dall-e-3',
  //       prompt: text,
  //       response_format: 'url',
  //     });
  //
  //     // Return the URL of the generated image
  //     return data[0].url;
  //   } catch (e) {
  //     // Log and propagate the error
  //     console.error(e);
  //     throw new ServiceUnavailableException('Failed to generate image');
  //   }
  // }
}
