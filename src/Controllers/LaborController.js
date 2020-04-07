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
        .select('Name','Email','id')
        .first();

        const userPass = await connection('Labor')
        .where('Email',Email)
        .select('Password')
        .first();
        
        if(!user){
            console.log("user not found")
            return response.status(400).send("Usuário não encontrado")
            
        }
        try{
            if(await bcrypt.compare(Password,userPass.Password)){
                console.log("login realizado")
                return response.json({user})
                
            }
            else{
                console.log("senha errada")
                response.status(202).send("Senha Incorreta")
                
            }
        }
        catch(error){
            console.log(error)
            return response.status(500).send();
            
        }




    }

       

    

}