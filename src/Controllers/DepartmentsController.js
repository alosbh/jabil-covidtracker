const connection = require('../database/connection')


module.exports = {
    async create (request,response){

        const {DepartmentName} = request.body;
       
        console.log(request.body)
        const obj = await connection('Departments').returning('*').insert({
            DepartmentName
        });
        
        
        return response.json({obj});

        },

    async index (request,response){
        const Incidents = await connection('Departments').select('*');
        return response.json(Incidents);
    },
    async delete (request,response){
        
        const { id } = request.params;
        

        const department = await connection('Departments')
        .where('id',id)
        .select('DepartmentName')
        .first();

        if(!department){
            return response.status(400).json({error:"Departamento não encontrado."})
        }
        
        await connection('Departments').where('id',id).delete();

        return response.status(204).send();

    } 


}