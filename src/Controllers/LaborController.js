const connection = require('.././database/connection')
const bcrypt = require('bcrypt');

module.exports = {
    async create (request,response){

        
        
        
        const Name=request.body.Name;
        const BirthDate = request.body.BirthDate;
        const Site = request.body.Site;
        const Department = request.body.Department;
        const Email = request.body.Email;
        const salt = await bcrypt.genSalt();
        const Password = await bcrypt.hash(request.body.Password,salt);
        
        
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
    },

    async clear(request,response){
        
        const labors = await connection('Labor').delete();

        return response.status(201).send();
    },

    async login(request,response){
        console.log("Login tentative")
        console.log(request.body)
        const Email = request.body.Email;
        const Password = request.body.Password;
        const user = await connection('Labor')
        .where('Email',Email)
        .select('Name','Password')
        .first();
        
        if(!user){
            return response.status(400).send("Usuário não encontrado")
            console.log("user not found")
        }
        try{
            if(await bcrypt.compare(Password,user.Password)){
                response.status(200).send("Login realizado.")
                console.log("login realizado")
            }
            else{
                response.status(202).send("Senha Incorreta")
                console.log("senha errada")
            }
        }
        catch{
            return response.status(500).send();
            console.log("algum erro aq")
        }




    }

       

    

}