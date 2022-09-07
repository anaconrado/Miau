const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const doador = await connection('doadores')
            .where('id', id)
            .select('nome')
            .first();

        if(!doador) {
            return response.status(400).json({ error: 'No Donor found whith this ID.' });
        }

        return response.json(doador);
    }
}