import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { PromptEntity } from '../../entities/prompt.entity';

export class CreatePromptResponseDto {
  @StringProperty({
    description: 'Id промпта',
    example: '1f21cf95-cdc8-4cbd-9aa3-e22dd95b57df3',
  })
  id: string;

  constructor(prompt: PromptEntity) {
    this.id = prompt.id;
  }
}
