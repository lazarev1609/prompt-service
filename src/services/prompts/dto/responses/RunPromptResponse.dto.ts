import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class RunPromptResponseDto {
  @StringProperty({ description: 'Тело ответа', example: '| A | B | C | D\n' })
  body: string;

  constructor(body: string) {
    this.body = body;
  }
}
