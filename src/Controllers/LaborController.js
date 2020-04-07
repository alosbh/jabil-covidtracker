const connection = require('.././database/connection')


module.exports = {
    async create (request,response){

        const {Name,
            BirthDate,
            Site,
            Department,
            Email,
            Password} = request.body;
        
        
        const newLabor = await connection('Labor').returning('*').insert({
            Email,
            // EmailConfirm,
            Password,
            // PasswordConfirm,
            Name,
            BirthDate,
            Department,
            Site
            })
        

        return response.json({newLabor});

        },


    async index (request,response){

        const labors = await connection('Labor').select('*');
    
        return response.json(labors);
    }

    

}