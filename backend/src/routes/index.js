import {Router} from 'express'
import {userRoutes} from './users.routes.js'
import { emitterRoutes } from './emissor.routes.js'
// import { bankRoutes } from './bank.routes.js';

export const routes = Router();
routes.use('/users',userRoutes)
routes.use('/emitters', emitterRoutes)
// routes.use('/bank', bankRoutes)

