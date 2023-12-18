import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { CategoryEntity } from '../../entities/category.entity';

export class CreateCategoryResponseDto {
  @StringProperty({
    description: 'Id промпта',
    example: '1f21cf95-cdc8-4cbd-9aa3-e22dd95b57df3',
  })
  id: string;

  constructor(category: CategoryEntity) {
    this.id = category.id;
  }
}
