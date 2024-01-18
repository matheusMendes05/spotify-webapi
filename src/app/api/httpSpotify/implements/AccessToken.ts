import axios from 'axios';
import { IAccessToken, ResponseAccessToken } from '../contracts/IAccessToken';

export class AccessToken implements IAccessToken {
  async token(): Promise<ResponseAccessToken> {
    const response = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      params: {
        grant_type: 'client_credentials',
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.SPOTIFY_CLIENT_ID as string,
        password: process.env.SPOTIFY_CLIENT_SECRET as string,
      },
    });

    return response.data;
  }
}
