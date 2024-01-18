import { IAccessToken } from '../../../api/httpSpotify/contracts/IAccessToken';

export class AccessTokenUseCase {
  constructor(private readonly api: IAccessToken) {}

  async execute(): Promise<any> {
    const access_token = await this.api.token();
    return access_token;
  }
}
