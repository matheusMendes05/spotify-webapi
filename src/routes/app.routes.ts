import { Router } from 'express';
const appRoutes = Router();

appRoutes.get('/', (request, response) => {
  return response.status(200).json([
    {
      application: `spotify-avaliacao-node-webapi:${process.env.ENVIRONMENT}`,
    },
  ]);
});

export { appRoutes };
