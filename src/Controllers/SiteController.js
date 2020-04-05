const connection = require('../database/connection')


module.exports = {
    async create (request,response){

        const {SiteName} = request.body;
       
        
        const obj = await connection('Site').returning('*').insert({
            SiteName
        });
        
        
        return response.json({obj});

        },

    async index (request,response){
        const Site = await connection('Site').select('*');
        return response.json(Site);
    },
    async delete (request,response){
        
        const { id } = request.params;
        

        const site = await connection('Site')
        .where('id',id)
        .select('SiteName')
        .first();

        if(!site){
            return response.status(400).json({error:"Site não encontrado."})
        }
        
        await connection('Site').where('id',id).delete();

        return response.status(204).send();

    } 


}