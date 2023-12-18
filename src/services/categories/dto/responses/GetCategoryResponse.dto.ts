import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class GetCategoryResponseDto {
  @StringProperty({
    description: 'Id категории',
    example: '1f21cf95-cdc8-4cbd-9aa3-e22dd95b57df3',
  })
  id: string;

  @StringProperty({
    description: 'Название категории',
    example: 'Language',
  })
  title: string;
}
