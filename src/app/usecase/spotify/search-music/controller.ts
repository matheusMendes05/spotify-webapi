import { Request, Response } from 'express';
import { SearchMusicUseCase } from './usecase';

export class SearchMusicController {
  constructor(private readonly usecase: SearchMusicUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { buscar, limit } = request.body;

      if (!buscar) {
        return response
          .status(400)
          .json({ statusCode: 400, body: 'Missing param: Buscar' });
      }

      const data = await this.usecase.execute({ buscar, limit });

      if (!data)
        return response
          .status(200)
          .json({ statusCode: 200, data: 'Search not found' });

      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
