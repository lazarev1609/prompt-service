import { StringProperty } from '@ivankrtv/openapidoc/dist';

export class GetCategoryRequestDto {
  @StringProperty({
    description: 'Id категории',
    example: 'qd1w-12-ads-a-sd-as-2222',
  })
  id: string;
}
