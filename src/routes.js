const express= require('express');

const {celebrate,Segments,Joi} = require('celebrate');


const routes = express.Router();

// routes.post('/sessions', SessionController.create);

routes.get('/ongs', (request,response)=>{


    response.send("hello");
});
// routes.post('/ongs',celebrate({
//     [Segments.BODY]:Joi.object().keys({
//         nome: Joi.string().required(),
//         email: Joi.string().required().email(),
//         whatsapp: Joi.string().required().min(10).max(11),
//         city: Joi.string().required(),
//         UF: Joi.string().required().length(2),


//     })
// }), OngController.create);

// routes.get('/incidents',celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//         page: Joi.number(),
//     })
// }), IncidentController.index);
// routes.post('/incidents', IncidentController.create);

// routes.delete('/incidents/:id',celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id: Joi.number().required(),
//     })
// }), IncidentController.delete);

// routes.get('/profile', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         auth: Joi.string().required(),
//     }).unknown(),
// }

// ),ProfileController.index);


module.exports = routes;