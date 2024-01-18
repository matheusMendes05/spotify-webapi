import { SearchController } from './controller';
import { RequestSpotify } from '../../../api/httpSpotify/implements/RequestSpotify';
import { SearchUseCase } from './usecase';
import { AccessToken } from '../../../api/httpSpotify/implements/AccessToken';

export default (): SearchController => {
  const access_token = new AccessToken();
  const requestSearch = new RequestSpotify();
  const usecase = new SearchUseCase(access_token, requestSearch);
  return new SearchController(usecase);
};
