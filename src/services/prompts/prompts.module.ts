import { Module } from '@nestjs/common';
import { PromptsController } from './prompts.controller';
import { PromptsService } from './prompts.service';
import { OpenaiModule } from '../openai/openai.module';
import { PromptsRepository } from '../../repositories/prompts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromptEntity } from './entities/prompt.entity';
import { CategoryEntity } from '../categories/entities/category.entity';
import { CategoriesRepository } from '../../repositories/categories.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PromptEntity, CategoryEntity]),
    OpenaiModule,
  ],
  controllers: [PromptsController],
  providers: [PromptsService, PromptsRepository, CategoriesRepository],
})
export class PromptsModule {}
