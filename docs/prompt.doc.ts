import { commonController, propmtTag } from './openapi';
import { GetPromptResponseDto } from '../src/services/prompts/dto/responses/GetPromptResponse.dto';
import { ValidationErrorDto } from './errors/validation-error.dto';
import { DomainErrorDto } from './errors/domain-error.dto';
import { UnauthorizedErrorDto } from './errors/unauthorized-error.dto';
import { RunPromptRequestDto } from '../src/services/prompts/dto/requests/RunPromptRequest.dto';
import { RunPromptResponseDto } from '../src/services/prompts/dto/responses/RunPromptResponse.dto';

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

promptController.addApiMethod('/run', {
  method: 'POST',
  title: 'Запустить промпт',
  isImplemented: true,
  requiresAuthorization: true,
  requestBody: RunPromptRequestDto,
  responses: {
    '200': [RunPromptResponseDto],
    '400': [DomainErrorDto, ValidationErrorDto],
    '401': [UnauthorizedErrorDto],
  },
});
