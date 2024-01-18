import { SearchMusicController } from './controller';
import { SearchMusicUseCase } from './usecase';
import { AccessToken } from '../../../api/httpSpotify/implements/AccessToken';
import { RequestSpotify } from '../../../api/httpSpotify/implements/RequestSpotify';

export default (): SearchMusicController => {
  const access_token = new AccessToken();
  const requestSearch = new RequestSpotify();
  const usecase = new SearchMusicUseCase(access_token, requestSearch);
  return new SearchMusicController(usecase);
};
