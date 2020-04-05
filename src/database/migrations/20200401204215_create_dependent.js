
exports.up = function(knex) {
    return knex.schema.createTable('Dependents', function (table){
  
        table.increments();
        table.string('Name').notNullable();
        table.dateTime("birthDate").notNullable();
        table.integer('LaborID').notNullable().unsigned();
        table.foreign('LaborID').references('id').inTable("Labor")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Dependents');
    
  };
  