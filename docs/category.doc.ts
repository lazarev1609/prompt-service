import { categoryTag, commonController } from './openapi';
import { DomainErrorDto } from './errors/domain-error.dto';
import { ValidationErrorDto } from './errors/validation-error.dto';
import { GetCategoryResponseDto } from '../src/services/categories/dto/responses/GetCategoryResponse.dto';
import { UnauthorizedErrorDto } from './errors/unauthorized-error.dto';
import { CreateCategoryResponseDto } from '../src/services/categories/dto/responses/CreateCategoryResponse.dto';
import { CreateCategoryRequestDto } from '../src/services/categories/dto/requests/CreateCategoryRequest.dto';
import { DeleteCategoryRequestDto } from '../src/services/categories/dto/requests/DeleteCategoryRequest.dto';
import { GetCategoryRequestDto } from '../src/services/categories/dto/requests/GetCategoryRequest.dto';

const categoryController = commonController.createController('/category', [
  categoryTag,
]);

categoryController.addApiMethod('/:id', {
  method: 'GET',
  title: 'Страница категории',
  isImplemented: false,
  requiresAuthorization: false,
  pathParams: GetCategoryRequestDto,
  responses: {
    '200': [GetCategoryResponseDto],
    '400': [DomainErrorDto, ValidationErrorDto],
  },
});

categoryController.addApiMethod('', {
  method: 'POST',
  title: 'Создание новой категории',
  isImplemented: false,
  requiresAuthorization: false,
  requestBody: CreateCategoryRequestDto,
  responses: {
    '200': [CreateCategoryResponseDto],
    '400': [DomainErrorDto, ValidationErrorDto],
    '401': [UnauthorizedErrorDto],
  },
});

categoryController.addApiMethod('/:id', {
  method: 'DELETE',
  title: 'Удаление категории',
  isImplemented: false,
  requiresAuthorization: false,
  pathParams: DeleteCategoryRequestDto,
  responses: {
    '200': [],
    '400': [DomainErrorDto, ValidationErrorDto],
    '401': [UnauthorizedErrorDto],
  },
});
