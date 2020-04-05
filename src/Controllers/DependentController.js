const connection = require('../database/connection')


module.exports = {
    async create (request,response){

        const {Name,
            birthDate,
            LaborID,
            } = request.body;
        
        
        const newDependent = await connection('Dependents').returning('*').insert({
            Name,
            birthDate,
            LaborID,
            
            })
        

        return response.json({newDependent});

        },


    async index (request,response){

        const labors = await connection('Dependents').select('*');
    
        return response.json(labors);
    },
    async delete (request,response){
        
        const { id } = request.params;
        

        const dependent = await connection('Dependents')
        .where('id',id)
        .select('Name')
        .first();

        if(!dependent){
            return response.status(400).json({error:"Dependente não encontrado."})
        }
        
        const obj = await connection('Dependents').where('id',id).delete();

        return response.json({dependent});

    } 

    

}