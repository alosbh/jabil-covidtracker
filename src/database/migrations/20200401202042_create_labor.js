
exports.up = function(knex) {
    return knex.schema.createTable('Labor', function (table){
  
        table.increments();
        table.string('Name').notNullable();
        table.dateTime("birthDate").notNullable();
        table.integer("SiteID").notNullable().unsigned();
        table.integer('DepartmentID').notNullable().unsigned();
        table.string('mailAddress').notNullable();
        table.string('password').notNullable();
        table.foreign('DepartmentID').references('id').inTable("Departments");
        table.foreign('SiteID').references('id').inTable("Site");
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Labor');
    
  };
  