const TeamsService = {
    //Get all teams
    getAllTeams(knex) {
        return knex.select('*').from('teams');
    },
    //Add a team
    insertTeam(knex, newteam) {
        return knex
            .insert(newteam)
            .into('teams')
            .returning('*')
            .then(rows => {
                return rows[0];
            });
    },
    //Get a team
    getById(knex, id) {
        return knex
            .from('teams')
            .select('*')
            .where('teamid', id)
            .first();
    },
    //Delete a team
    deleteTeam(knex, id) {
        return knex
            .from('teams')
            .where('teamid', id)
            .delete();
    },
    //Update a team
    updateTeam(knex, id, newteamFields) {
        return knex
            .from('teams')
            .where('teamid', id)
            .update(newteamFields);
    }
};

module.exports = TeamsService;