
exports.up = function(knex) {
    return knex.schema.createTable('Departments', function (table){
  
        table.increments();
        
        table.string('DepartmentName').notNullable();
        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Departments');
    
  };
  