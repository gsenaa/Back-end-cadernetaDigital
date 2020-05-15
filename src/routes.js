import { Router }  from 'express';

import UserController from './app/controller/UserController';
import DoacaoController from './app/controller/DoacaoController';

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

export default routes;