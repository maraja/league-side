import express from 'express';
let router = express.Router();

import leagueController from "#root/server/controllers/league";

const {
    postLeague,
    getLeagues,
} = leagueController

router.post("/", postLeague)
router.get("/", getLeagues)


export default router;