import { ObjectProperty, StringProperty } from '@ivankrtv/openapidoc/dist';
import { GetPromptCategoryResponseDto } from './GetPromptCategoryResponse.dto';

export class GetPromptResponseDto {
  @StringProperty({
    description: 'Название промпта',
    example: 'Act as an Excel Sheet',
  })
  id: string;

  @StringProperty({
    description: 'Название промпта',
    example: 'Act as an Excel Sheet',
  })
  title: string;

  @StringProperty({
    description: 'Описание промпта',
    example: 'Serve as a text-based Excel...',
  })
  description: string;

  @StringProperty({
    description: 'Тело промпта',
    example:
      "I want you to act as a text based excel. You'll only reply me the text-based {{number-of-rows}} rows excel sheet with row numbers and cell letters as columns (A to {{last-column-letter}})",
  })
  body: string;

  @ObjectProperty({ description: 'Категория промпта' })
  category: GetPromptCategoryResponseDto;
}
