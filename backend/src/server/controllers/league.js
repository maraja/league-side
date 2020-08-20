import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

import Sequelize from 'sequelize';
import { getDistance } from 'geolib';
const Op = Sequelize.Op;

const { League } = db;


const getLeagues = async (req, res, next) => {
    if (!req.query) return next(new Error("No params provided!"));

    const { lat, lng, radius, budget } = req.query
    try {
        // create the league
        let leagues = await League.findAll({
            where: {
                price: { [Op.lte]: parseInt(budget) }
            }
        })

        // sort in descending order
        leagues.sort((a, b) => b.price - a.price)
        leagues = leagues.filter(l => {
            console.log(getDistance(
                {latitude: l.lat, longitude: l.lng},
                {latitude: lat, longitude: lng}
            ))
            console.log(radius/0.00062137)
            return getDistance(
                {latitude: l.lat, longitude: l.lng},
                {latitude: lat, longitude: lng}
            ) <= (radius/0.00062137)
        })
        
        // create an overall new leagues array to hold the best
        // leagues based on the number of them found
        let newLeagues = []

        // O(n^2) run time for looping through all the leagues twice
        // this is probably not the most optimal solution.
        // this solution is actually O(n(n-1)/2), which is slightly better
        // than O(n^2)
        for (let i = 0; i < leagues.length; i++) {
        // leagues.forEach(l => {
            // create a temp leagues array to hold all the leagues being iterated
            // through in the second iteration
            let tempLeagues = [leagues[i]]
            // this rolling budget will update based on the league found.
            let rollingBudget = budget - leagues[i].price

            for (let j = i+1; j < leagues.length; j++) {

            // leagues.forEach(k => {
                if (leagues[j].price <= rollingBudget) {
                    tempLeagues.push(leagues[j])
                    rollingBudget -= leagues[j].price
                } 
            }
            console.log(tempLeagues.map(l => l.price))
            // compare with the current running leagues 
            // to see how many teams are found.
            // replace if there are more teams in the temp leagues.
            if (tempLeagues.length > newLeagues.length) {
                newLeagues = tempLeagues
            }
        }

        return res.json({
            success: true,
            message: "Leagues retrieved.",
            leagues: newLeagues
        });
    } catch (e) {
        return next(e);
    }
}

const postLeague = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    // assign all the provided variables
    const { name, lat, lng, price } = req.body;

    try {
        // create the league
        let newLeague = await League.create({
            id: generateUUID(),
            name, lat, lng, price
        })

        return res.json({
            success: true,
            message: "League created.",
            newLeague
        });
    } catch (e) {
        return next(e);
    }
}

export default {
    getLeagues,
    postLeague
};