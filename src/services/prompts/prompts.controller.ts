import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';
import { RunPromptRequestDto } from './dto/requests/RunPromptRequest.dto';
import { RunPromptResponseDto } from './dto/responses/RunPromptResponse.dto';
import { ApiNeedAuth } from '../../common/decorators/auth.decorator';

@Controller('/prompts')
export class PromptsController {
  constructor(private readonly openaiService: OpenaiService) {}

  @ApiNeedAuth()
  @Post('/run')
  private async runPrompt(
    @Body() dto: RunPromptRequestDto,
  ): Promise<RunPromptResponseDto> {
    return await this.openaiService.runPrompt(dto);
  }
}
