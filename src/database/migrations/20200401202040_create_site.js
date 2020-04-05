
exports.up = function(knex) {
    return knex.schema.createTable('Site', function (table){
  
        table.increments();
        
        table.string('SiteName').notNullable();
        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Site');
    
  };
  