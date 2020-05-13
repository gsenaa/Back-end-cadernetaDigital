import { Router }  from 'express';

import UserController from './app/controller/UserController';
import DoacaoController from './app/controller/DoacaoController';

const routes = new Router();

//Rotas do usuarios
routes.get('/users', UserController.get);

routes.get('/users/:id', UserController.getUser);

routes.post('/users/post', UserController.post);

routes.put('/users/update/:id', UserController.put);

routes.delete('/users/delete/:id', UserController.delete); 
///////////////////////////////////////////////////////////


//Rotas doacao
routes.get('/doacoes', DoacaoController.get);

routes.get('/doacoes/:id', DoacaoController.getId);

routes.post('/doacoes/post', DoacaoController.post);
//////////////////////////////////////////////////////////

export default routes;