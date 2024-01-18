import { PARAMS_MARKET, PARAMS_TYPE } from '../app/usecase/spotify/search/dto';

export const generateRandomString = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const checkInputType = (value: string): boolean => {
  switch (value) {
    case 'album':
      return true;
    case 'artist':
      return true;
    case 'playlist':
      return true;
    case 'track':
      return true;
    case 'show':
      return true;
    case 'episode':
      return true;
    case 'audiobook':
      return true;
    default:
      return false;
  }
};

export const checkInputMarket = (value: string): boolean => {
  switch (value) {
    case 'ES':
      return true;
    case 'BR':
      return true;
    default:
      return false;
  }
};
