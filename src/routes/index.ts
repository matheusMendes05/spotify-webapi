import { Router } from 'express';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';
import { appRoutes } from './app.routes';
import { spotifyRoutes } from './spotify.routes';
const router = Router();

router.use('/', appRoutes);

// middleware que verifica x-api-key no cabecalho das requisicoes
router.use(apiKeyMiddleware);
router.use('/api/spotify', spotifyRoutes);
export { router };
