const connection = require('.././database/connection')


module.exports = {
    async create (request,response){

        const {Name,
            birthDate,
            SiteID,
            DepartmentID,
            mailAddress,
            password} = request.body;
        
        
        const newLabor = await connection('Labor').returning('*').insert({
            Name,
            birthDate,
            SiteID,
            DepartmentID,
            mailAddress,
            password,
            })
        

        return response.json({newLabor});

        },


    async index (request,response){

        const labors = await connection('Labor').select('*');
    
        return response.json(labors);
    }

    

}