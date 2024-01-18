import { IAccessToken } from '../../../api/httpSpotify/contracts/IAccessToken';
import { IRequestSpotify } from '../../../api/httpSpotify/contracts/IRequestSpotify';
import { searchDTO } from './dto';

export class SearchUseCase {
  constructor(
    private readonly access_token: IAccessToken,
    private readonly requestSpotify: IRequestSpotify,
  ) {}

  async execute(params: searchDTO): Promise<any> {
    const { access_token } = await this.access_token.token();
    const data = await this.requestSpotify.searchforItem(access_token, params);
    return data;
  }
}
