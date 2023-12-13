import { categoryTag, commonController } from './openapi';
import { DomainErrorDto } from './errors/domain-error.dto';
import { ValidationErrorDto } from './errors/validation-error.dto';
import { GetCategoryResponseDto } from '../src/services/categories/dto/responses/GetCategoryResponse.dto';

const categoryController = commonController.createController('/category', [
  categoryTag,
]);

categoryController.addApiMethod('/:id', {
  method: 'GET',
  title: 'Страница категории',
  isImplemented: false,
  requiresAuthorization: false,
  responses: {
    '200': [GetCategoryResponseDto],
    '400': [DomainErrorDto, ValidationErrorDto],
  },
});
