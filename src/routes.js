import { Router }  from 'express';

import UserController from './app/controller/UserController';
import DoacaoController from './app/controller/DoacaoController';
import ExameController from './app/controller/ExameController';
import CartaoVacinaController from './app/controller/CartaoVacinaController';

const routes = new Router();

//Rotas do usuarios
routes.get('/users', UserController.get);

routes.get('/users/get/:id', UserController.getUser);

routes.post('/users/post', UserController.post);

routes.put('/users/update/:id', UserController.put);

routes.delete('/users/delete/:id', UserController.delete); 
///////////////////////////////////////////////////////////


//Rotas doacao
routes.get('/doacoes', DoacaoController.get);

routes.get('/doacoes/get/:id', DoacaoController.getId);

routes.post('/doacoes/post', DoacaoController.post);

routes.put('/doacoes/update/:id', DoacaoController.put);

routes.delete('/doacoes/delete/:id', DoacaoController.delete)
//////////////////////////////////////////////////////////

//Rotas exame
routes.get('/exame', ExameController.get);

routes.get('/exame/get/:id', ExameController.getId);

routes.post('/exame/post', ExameController.post);

routes.put('/exame/update/:id', ExameController.put);

routes.delete('/exame/delete/:id', ExameController.delete)
//////////////////////////////////////////////////////////

//Rotas cartaoVacina
routes.get('/cartaoVacina', CartaoVacinaController.get);

routes.get('/cartaoVacina/get/:id', CartaoVacinaController.getId);

routes.post('/cartaoVacina/post', CartaoVacinaController.post);

routes.put('/cartaoVacina/update/:id', CartaoVacinaController.put);

routes.delete('/cartaoVacina/delete/:id', CartaoVacinaController.delete)
//////////////////////////////////////////////////////////



export default routes;