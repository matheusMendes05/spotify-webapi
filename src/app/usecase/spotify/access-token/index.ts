import { AccessToken } from '../../../api/httpSpotify/implements/AccessToken';
import { AccessTokenController } from './controller';
import { AccessTokenUseCase } from './usecase';

export default (): AccessTokenController => {
  const api = new AccessToken();
  const usecase = new AccessTokenUseCase(api);
  return new AccessTokenController(usecase);
};
