exports.up = function up(knex) {
    return knex.schema.createTable('gatos', function(table){
        table.increments();

        table.string('nome').notNullable();
        table.string('idade', 1).notNullable();
        table.string('informacoes').notNullable();
        table.string('historia').notNullable();

        table.string('doador_id').notNullable();

        table.foreign('doador_id').references('id').inTable('doadores');
    });
}

exports.down = function down(knex) {
  return knex.schema.dropTable('gatos');
}
