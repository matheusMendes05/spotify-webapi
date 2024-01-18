import { IAccessToken } from '../../../api/httpSpotify/contracts/IAccessToken';
import { IRequestSpotify } from '../../../api/httpSpotify/contracts/IRequestSpotify';
import { searchMusicDTO } from './dto';

export interface MusicData {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Externalids;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: any;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface Externalids {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Artist2 {
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

export interface Followers {
  href: string;
  total: number;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Restrictions {
  reason: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Externalurls {
  spotify: string;
}

export class SearchMusicUseCase {
  constructor(
    private readonly access_token: IAccessToken,
    private readonly requestSpotify: IRequestSpotify,
  ) {}

  async execute(params: searchMusicDTO): Promise<MusicData[]> {
    const { access_token } = await this.access_token.token();

    const data = await this.requestSpotify.searchforItem(access_token, {
      q: params.buscar,
      type: 'track',
      market: 'BR',
      limit: params.limit ? params.limit : 10,
      offset: 5,
    });
    return data;
  }
}
