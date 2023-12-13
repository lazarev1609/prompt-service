import { OpenApiDoc, OpenAPIDocConfig } from '@ivankrtv/openapidoc/dist';

export const openApiDoc = new OpenApiDoc({
  title: 'Prompt service',
  version: '0.1.0',
} as OpenAPIDocConfig);

import('./prompt.doc');

export const commonController = openApiDoc.createController('');

export const propmtTag = openApiDoc.createTag('Промпты');
export const category = openApiDoc.createTag('Категории');

export const openApiDocument = openApiDoc.compileOpenApi();
