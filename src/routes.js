const express= require('express');

const {celebrate,Segments,Joi} = require('celebrate');

const DepartmentsController = require('./Controllers/DepartmentsController');
const SiteController = require('./Controllers/SiteController');
const LaborController = require('./Controllers/LaborController');
const DependentController = require('./Controllers/DependentController');
const BodyCheckController = require('./Controllers/BodyCheckController');
const routes = express.Router();

routes.get('/site',SiteController.index);
routes.delete('/site/:id',SiteController.delete);
routes.post('/site',SiteController.create);

routes.get('/departments',DepartmentsController.index);
routes.delete('/departments/:id',DepartmentsController.delete);
routes.post('/departments',DepartmentsController.create);

routes.get('/labor',LaborController.index);
routes.post('/labor',LaborController.create);
routes.post('/labor/login',LaborController.login);
routes.delete('/labor',LaborController.clear);

routes.get('/dependent',DependentController.index);
routes.delete('/dependent/:id',DependentController.delete);
routes.post('/dependent',DependentController.create);

routes.get('/bodycheck',BodyCheckController.index);

routes.post('/bodycheck',BodyCheckController.create);

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