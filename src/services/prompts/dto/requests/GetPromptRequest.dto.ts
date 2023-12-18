import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class GetPromptRequestDto {
  @StringProperty({
    description: 'Id промпта',
    example: 'asd12-1e-sad-asdasd-adss',
  })
  @IsString()
  @IsUUID()
  @Type(() => String)
  id: string;
}
