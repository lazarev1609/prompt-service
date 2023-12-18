import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

@Injectable()
export class JwtAuthGuard {
  constructor() {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const accessToken = request.headers.authorization?.split(' ')[1];

    const authUrl = process.env.AUTH_URL;

    const body = {
      accessToken,
    };

    try {
      await axios.post(authUrl, body);
    } catch (exception) {
      throw new UnauthorizedException(exception.response.data);
    }

    return true;
  }
}
