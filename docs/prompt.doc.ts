import { commonController, propmtTag } from './openapi';
import { GetPromptResponseDto } from '../src/services/prompts/dto/responses/GetPromptResponse.dto';
import { ValidationErrorDto } from './errors/validation-error.dto';
import { DomainErrorDto } from './errors/domain-error.dto';

const promptController = commonController.createController('/prompt', [
  propmtTag,
]);

promptController.addApiMethod('/:id', {
  method: 'GET',
  title: 'Страница промпта',
  isImplemented: false,
  requiresAuthorization: false,
  responses: {
    '200': [GetPromptResponseDto],
    '400': [DomainErrorDto, ValidationErrorDto],
  },
});
