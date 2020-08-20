import leagueRouter from './league';

const API_VERSION = 1
const API_PREFIX = '/v'+API_VERSION

const setupRoutes = app => {
    app.use(`${API_PREFIX}/league`, leagueRouter);
}

export default setupRoutes;