import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { IsOptional, IsString } from 'class-validator';

export class CreatePromptRequestDto {
  @StringProperty({
    description: 'Название промпта',
    example: 'Act as an Excel Sheet',
  })
  @IsString()
  title: string;

  @StringProperty({
    description: 'Описание промпта',
    example: 'Serve as a text-based Excel...',
  })
  @IsString()
  description: string;

  @StringProperty({
    description: 'Тело промпта',
    example:
      "I want you to act as a text based excel. You'll only reply me the text-based {{number-of-rows}} rows excel sheet with row numbers and cell letters as columns (A to {{last-column-letter}})",
  })
  @IsString()
  body: string;

  @StringProperty({
    description: 'Название категории',
    example: 'asdasd-asqwq-412312r1-d12',
  })
  @IsString()
  @IsOptional()
  categoryId: string | null;
}
