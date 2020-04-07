
exports.up = function(knex) {
    return knex.schema.createTable('BodyCheck', function (table){
  
        // table.integer("LaborID").notNullable().unsigned();
        // table.datetime('Time').notNullable().unsigned();
        // table.float("Measure").notNullable();
        // table.foreign('LaborID').references('id').inTable("Labor");
        // table.primary(['LaborID','Measure']);

        table.integer("LaborID").notNullable().unsigned();
        table.string('Time').notNullable().unsigned();
        table.string("Measure").notNullable();
        table.foreign('LaborID').references('id').inTable("Labor");
        table.primary(['LaborID','Measure']);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('BodyCheck');
    
  };
  