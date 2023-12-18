import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { CategoryEntity } from '../../../categories/entities/category.entity';

export class GetPromptCategoryResponseDto {
  @StringProperty({
    description: 'Id категории',
    example: '1f21cf95-cdc8-4cbd-9aa3-e22dd95b57df3',
  })
  id: string;

  @StringProperty({
    description: 'Название категории',
    example: 'Business',
  })
  title: string;

  constructor(category: CategoryEntity) {
    this.id = category.id;
    this.title = category.title;
  }
}
