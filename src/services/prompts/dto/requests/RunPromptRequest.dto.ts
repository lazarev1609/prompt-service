import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class RunPromptRequestDto {
  @StringProperty({
    description: 'Тело сообщения',
    example: 'I want you to act as a text based excel.',
  })
  message: string;
}
