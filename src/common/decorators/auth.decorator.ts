import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../services/prompts/guard/jwt-auth.guard';

export function ApiNeedAuth() {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
