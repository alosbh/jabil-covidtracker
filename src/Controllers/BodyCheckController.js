const connection = require('../database/connection')


module.exports = {
    async create (request,response){

        const {
            LaborID,
            Time,
            Measure,} = request.body;
        
        // const LaborID = request.headers.authorization;
        
        console.log({Time,Measure,LaborID});
        const newMeasure = await connection('BodyCheck').returning('*').insert({
            LaborID,
            Time,
            Measure,
            })
        

        return response.json({newMeasure});

        },


    async index (request,response){

        // const measures = await connection('BodyCheck')
        // .join('Labor','Labor.id','=','BodyCheck.LaborID')
        // .select('BodyCheck,*',
        // 'Labor.Name',
        // 'Labor.DepartmentID'
        // );

        const measures = await connection('BodyCheck')
        .select('*');
    
        return response.json(measures);
    }

    

}