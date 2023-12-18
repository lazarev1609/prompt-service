import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryRequestDto } from './dto/requests/CreateCategoryRequest.dto';
import { CreateCategoryResponseDto } from './dto/responses/CreateCategoryResponse.dto';
import { CategoryService } from './category.service';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('')
  private async create(
    @Body() dto: CreateCategoryRequestDto,
  ): Promise<CreateCategoryResponseDto> {
    return await this.categoryService.create(dto);
  }
}
