import { SearchArtistController } from './controller';
import { SearchArtistUseCase } from './usecase';
import { AccessToken } from '../../../api/httpSpotify/implements/AccessToken';
import { RequestSpotify } from '../../../api/httpSpotify/implements/RequestSpotify';

export default (): SearchArtistController => {
  const access_token = new AccessToken();
  const requestSearch = new RequestSpotify();
  const usecase = new SearchArtistUseCase(access_token, requestSearch);
  return new SearchArtistController(usecase);
};
