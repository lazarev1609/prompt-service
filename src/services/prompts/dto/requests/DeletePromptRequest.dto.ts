import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class DeletePromptRequestDto {
  @StringProperty({
    description: 'Название промпта',
    example: 'Act as an Excel Sheet',
  })
  id: string;
}
