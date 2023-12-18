import { StringProperty } from '@ivankrtv/openapidoc/dist';
import { IsString } from 'class-validator';

export class CreateCategoryRequestDto {
  @StringProperty({
    description: 'Название категории',
    example: 'Business',
  })
  @IsString()
  title: string;
}
