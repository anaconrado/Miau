const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const doador_id = request.headers.authorization;

        const gatos = await connection('gatos')
            .where('doador_id', doador_id)
            .select('*');
        return response.json(gatos);
    }
}