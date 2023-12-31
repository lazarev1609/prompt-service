import { OpenApiDoc, OpenAPIDocConfig } from '@ivankrtv/openapidoc/dist';

export const openApiDoc = new OpenApiDoc({
  title: 'Prompt service',
  version: '0.1.0',
} as OpenAPIDocConfig);

import('./prompt.doc');
import('./category.doc');

export const commonController = openApiDoc.createController('');

export const propmtTag = openApiDoc.createTag('Промпты');
export const categoryTag = openApiDoc.createTag('Категории');

export const openApiDocument = openApiDoc.compileOpenApi();
