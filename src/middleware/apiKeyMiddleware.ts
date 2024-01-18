import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../helpers/api-error';

export const apiKeyMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const x_api_key = request.headers['x-api-key'];

  if (!x_api_key || x_api_key !== process.env.X_API_KEY)
    throw new UnauthorizedError('x-api-key inválida.');

  next();
};
