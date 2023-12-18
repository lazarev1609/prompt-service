import { RunPromptRequestDto } from './dto/requests/RunPromptRequest.dto';
import { RunPromptResponseDto } from './dto/responses/RunPromptResponse.dto';
import { OpenaiService } from '../openai/openai.service';
import { GetPromptResponseDto } from './dto/responses/GetPromptResponse.dto';
import { PromptsRepository } from '../../repositories/prompts.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePromptRequestDto } from './dto/requests/CreatePromptRequest.dto';
import { CreatePromptResponseDto } from './dto/responses/CreatePromptResponse.dto';
import { PromptEntity } from './entities/prompt.entity';
import { CategoriesRepository } from '../../repositories/categories.repository';

@Injectable()
export class PromptsService {
  constructor(
    private readonly openaiService: OpenaiService,
    private readonly promptsRepository: PromptsRepository,
    private readonly categoryRepository: CategoriesRepository,
  ) {}

  public async runPrompt(
    dto: RunPromptRequestDto,
  ): Promise<RunPromptResponseDto> {
    const response = await this.openaiService.runPrompt(dto.message);

    return new RunPromptResponseDto(response);
  }

  public async getPromptPageById(id: string): Promise<GetPromptResponseDto> {
    const prompt = await this.promptsRepository.getById(id);

    if (!prompt) {
      throw new NotFoundException('Prompt not found');
    }
    return new GetPromptResponseDto(prompt);
  }

  public async create(
    dto: CreatePromptRequestDto,
  ): Promise<CreatePromptResponseDto> {
    const prompt = await this.promptsRepository.getByTitle(dto.title);

    if (prompt) {
      throw new BadRequestException('Prompt with this title already exists');
    }

    const category = await this.categoryRepository.getById(dto.categoryId);

    const promptToCreate = new PromptEntity();
    promptToCreate.title = dto.title;
    promptToCreate.description = dto.description;
    promptToCreate.body = dto.body;
    promptToCreate.category = category ?? null;

    const createdPrompt = await this.promptsRepository.save(promptToCreate);

    return new CreatePromptResponseDto(createdPrompt);
  }
}
