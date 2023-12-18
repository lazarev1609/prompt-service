import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class GetPromptRequestDto {
  @StringProperty({
    description: 'Id промпта',
    example: 'asd12-1e-sad-asdasd-adss',
  })
  id: string;
}
