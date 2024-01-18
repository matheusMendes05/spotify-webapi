import { IRequestSpotify } from '../contracts/IRequestSpotify';
import { searchDTO } from '../../../usecase/spotify/search/dto';
import axios from 'axios';

export class RequestSpotify implements IRequestSpotify {
  async searchforItem(access_token: string, params: searchDTO): Promise<any> {
    const response = await axios({
      method: 'GET',
      url: process.env.SPOTIFY_ENDPOINT as string,
      params: {
        q: params.q,
        type: params.type,
        market: params.market,
        limit: params.limit,
        offset: params.offset,
        include_external: params.include_external,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  }
}
