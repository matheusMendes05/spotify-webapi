import { Router } from 'express';
import accessTokenController from '../app/usecase/spotify/access-token';
import searchController from '../app/usecase/spotify/search';
import searchMusicController from '../app/usecase/spotify/search-music';
import searchArtistController from '../app/usecase/spotify/search-artist';

const spotifyRoutes = Router();

spotifyRoutes.get('/token-access', (request, response) => {
  return accessTokenController().handle(request, response);
});

spotifyRoutes.post('/pesquisar', (request, response) => {
  return searchController().handle(request, response);
});

spotifyRoutes.post('/pesquisar/musica', (request, response) => {
  return searchMusicController().handle(request, response);
});

spotifyRoutes.post('/pesquisar/artista', (request, response) => {
  return searchArtistController().handle(request, response);
});

export { spotifyRoutes };
