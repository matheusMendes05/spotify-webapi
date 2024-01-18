import { IAccessToken } from '../../../api/httpSpotify/contracts/IAccessToken';
import { IRequestSpotify } from '../../../api/httpSpotify/contracts/IRequestSpotify';
import { searchArtistDTO } from './dto';

export interface ArtistData {
  external_urls: Externalurls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Externalurls {
  spotify: string;
}

export class SearchArtistUseCase {
  constructor(
    private readonly access_token: IAccessToken,
    private readonly requestSpotify: IRequestSpotify,
  ) {}

  async execute(params: searchArtistDTO): Promise<ArtistData[]> {
    const { access_token } = await this.access_token.token();

    const data = await this.requestSpotify.searchforItem(access_token, {
      q: params.buscar,
      type: 'artist',
      market: 'BR',
      limit: params.limit ? params.limit : 10,
      offset: 5,
    });
    return data;
  }
}
