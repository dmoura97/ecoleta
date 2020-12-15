import express from 'express';

import PointsController from './Controllers/PointsController';
import ItemsControllers from './Controllers/ItemsController'

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsControllers(); 
 

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create); 
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index); 


export default routes;