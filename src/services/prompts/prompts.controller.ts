import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RunPromptRequestDto } from './dto/requests/RunPromptRequest.dto';
import { RunPromptResponseDto } from './dto/responses/RunPromptResponse.dto';
import { ApiNeedAuth } from '../../common/decorators/auth.decorator';
import { PromptsService } from './prompts.service';
import { GetPromptRequestDto } from './dto/requests/GetPromptRequest.dto';
import { GetPromptResponseDto } from './dto/responses/GetPromptResponse.dto';
import { CreatePromptRequestDto } from './dto/requests/CreatePromptRequest.dto';
import { CreatePromptResponseDto } from './dto/responses/CreatePromptResponse.dto';

@Controller('/prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @ApiNeedAuth()
  @Post('/run')
  private async runPrompt(
    @Body() dto: RunPromptRequestDto,
  ): Promise<RunPromptResponseDto> {
    return await this.promptsService.runPrompt(dto);
  }

  @Get('/:id')
  private async getPromptPage(
    @Param() param: GetPromptRequestDto,
  ): Promise<GetPromptResponseDto> {
    return await this.promptsService.getPromptPageById(param.id);
  }

  @ApiNeedAuth()
  @Post('')
  private async create(
    @Body() dto: CreatePromptRequestDto,
  ): Promise<CreatePromptResponseDto> {
    return await this.promptsService.create(dto);
  }
}
