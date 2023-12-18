import { InjectRepository } from '@nestjs/typeorm';
import { PromptEntity } from '../services/prompts/entities/prompt.entity';
import { Repository } from 'typeorm';

export class PromptsRepository {
  constructor(
    @InjectRepository(PromptEntity)
    private readonly repo: Repository<PromptEntity>,
  ) {}

  public async getById(id: string): Promise<PromptEntity> {
    return await this.repo
      .createQueryBuilder('prompt')
      .where('prompt.id = :id', { id })
      .getOne();
  }

  public async getByTitle(title: string): Promise<PromptEntity> {
    return await this.repo
      .createQueryBuilder('prompt')
      .where('prompt.title = :title', { title })
      .getOne();
  }

  public async save(prompt: PromptEntity): Promise<PromptEntity> {
    return await this.repo.save(prompt);
  }
}
