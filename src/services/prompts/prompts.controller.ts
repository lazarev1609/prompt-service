import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

@Controller('/prompts')
export class PromptsController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get('test-gpt')
  private async testGpt() {
    await this.openaiService.chatGptRequest();
  }
}
