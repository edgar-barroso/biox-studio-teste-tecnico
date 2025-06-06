import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { RecipeNotFoundError } from '@/application/error/RecipeNotFoundError';

@Catch()
export class AllExceptionsFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (response && typeof response.status === 'function') {
      if (exception instanceof RecipeNotFoundError) {
        return response.status(404).json({
          statusCode: 404,
          message: exception.message,
          error: 'Not Found',
        });
      }

      if (exception instanceof BadRequestException) {
        const res = exception.getResponse();
        const message = typeof res === 'string' ? res : (res as any).message;

        return response.status(400).json({
          statusCode: 400,
          message,
          error: 'Bad Request',
        });
      }
    }

    // Fallback para BaseExceptionFilter se nada acima tratou
    super.catch(exception, host);
  }
}