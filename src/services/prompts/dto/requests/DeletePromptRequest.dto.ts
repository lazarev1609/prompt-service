import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class DeletePromptRequestDto {
  @StringProperty({
    description: 'Id промпта',
    example: 'asd12-1e-sad-asdasd-adss',
  })
  id: string;
}
