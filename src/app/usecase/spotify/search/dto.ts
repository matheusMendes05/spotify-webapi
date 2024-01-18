export enum PARAMS_TYPE {
  album = 'album',
  artist = 'artist',
  playlist = 'playlist',
  track = 'track',
  show = 'show',
  episode = 'episode',
  audiobook = 'audiobook',
}

export enum PARAMS_MARKET {
  ES = 'ES',
  BR = 'BR',
}

export type searchDTO = {
  q: string;
  type: string;
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: string;
};
