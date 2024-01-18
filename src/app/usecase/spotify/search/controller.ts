import { Request, Response, json } from 'express';
import { SearchUseCase } from './usecase';
import { searchDTO } from './dto';
import { checkInputMarket, checkInputType } from '../../../../helpers/helpers';

export class SearchController {
  constructor(private readonly usecase: SearchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['q', 'type'];

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({
          statusCode: 400,
          error: 'Missing param: ' + field,
        });
      }
    }

    const { q, type, market, limit, offset, include_external } = request.body;

    if (!checkInputType(type))
      return response.status(400).json({
        statusCode: 400,
        error:
          'value type must contain one of the following values: [album, artist, playlist, track, show, episode, audiobook]',
      });

    if (!checkInputMarket(market))
      return response.status(400).json({
        statusCode: 400,
        error:
          'value market must contain one of the following values: [ES, BR]',
      });

    const params: searchDTO = {
      q,
      type,
      market,
      limit,
      offset,
      include_external,
    };

    const data = await this.usecase.execute(params);

    if (!data)
      return response
        .status(200)
        .json({ statusCode: 200, data: 'Search not found' });

    return response.status(200).json({ statusCode: 200, data: data });
  }
}
