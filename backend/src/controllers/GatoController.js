const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('gatos').count()

        const gatos = await connection('gatos')
            .join('doadores', 'doadores.id', '=', 'gatos.doador_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['gatos.*', 'doadores.nome', 'doadores.email', 'doadores.whatsapp', 'doadores.cidade', 'doadores.uf']);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(gatos);
    },

    async create(request, response) {
        const { nome, idade, sexo, informacoes, descricao } = request.body;
        const doador_id = request.headers.authorization;

        const [id] = await connection('gatos').insert({
            nome,
            idade,
            sexo,
            informacoes,
            descricao,
            doador_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const doador_id = request.headers.authorization;

        const gato = await connection('gatos')
            .where('id', id)
            .select('doador_id')
            .first();

        if(gato.doador_id != doador_id){
            return response.status(401).jason({ error: 'Operation not permitted.' });
        }

        await connection('gatos').where('id', id).delete();

        return response.status(204).send();
    }
};
