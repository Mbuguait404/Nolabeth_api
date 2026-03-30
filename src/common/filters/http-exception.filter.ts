import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =
      exception instanceof HttpException
        ? exception.getResponse()
        : (exception?.message || 'Internal server error');

    // Handle specific MongoDB/Mongoose errors
    // Duplicate Key Error (e.g., email already exists)
    if (exception?.code === 11000 || (exception?.name === 'MongoServerError' && exception?.code === 11000)) {
      status = HttpStatus.CONFLICT;
      const keyValue = exception.keyValue;
      if (keyValue) {
        const field = Object.keys(keyValue)[0];
        message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`;
      } else {
        message = 'Duplicate key error.';
      }
    }
    // Validation Error
    else if (exception?.name === 'ValidationError') {
      status = HttpStatus.BAD_REQUEST;
      message = Object.values(exception.errors || {})
        .map((err: any) => err.message)
        .join(', ');
    }
    // Cast Error (e.g., malformed ObjectId)
    else if (exception?.name === 'CastError') {
      status = HttpStatus.BAD_REQUEST;
      message = `Invalid ${exception.path}: ${exception.value}`;
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message:
        typeof message === 'object' && message !== null && 'message' in (message as Record<string, any>)
          ? (message as any).message
          : message,
    };

    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url} → ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(status).json(errorResponse);
  }
}
