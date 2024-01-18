import { Request, Response, json } from 'express';
import { AccessTokenUseCase } from './usecase';

export class AccessTokenController {
  constructor(private readonly usecase: AccessTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.usecase.execute();

      if (!data)
        return response
          .status(400)
          .json({ statusCode: 400, body: 'Access Token not found' });

      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ statusCode: 500, body: error });
    }
  }
}
