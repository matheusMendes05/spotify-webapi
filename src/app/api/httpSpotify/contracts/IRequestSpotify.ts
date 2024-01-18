import { searchDTO } from '../../../usecase/spotify/search/dto';

export interface IRequestSpotify {
  searchforItem(access_token: string, params: searchDTO): Promise<any>;
}
