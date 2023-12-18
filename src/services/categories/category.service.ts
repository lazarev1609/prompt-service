import { Injectable } from '@nestjs/common';
import { CreateCategoryRequestDto } from './dto/requests/CreateCategoryRequest.dto';
import { CreateCategoryResponseDto } from './dto/responses/CreateCategoryResponse.dto';
import { CategoriesRepository } from '../../repositories/categories.repository';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  public async create(
    dto: CreateCategoryRequestDto,
  ): Promise<CreateCategoryResponseDto> {
    const categoryToCreate = new CategoryEntity();

    categoryToCreate.title = dto.title;

    const category = await this.categoriesRepository.save(categoryToCreate);

    return new CreateCategoryResponseDto(category);
  }
}
