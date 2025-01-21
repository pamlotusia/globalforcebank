import {Router} from 'express'
import {userRoutes} from '../routes/users.routes.js'
import { emissorRoutes } from './emissor.routes.js';

export const routes = Router();
routes.use('/users',userRoutes)
routes.use('/emissor', emissorRoutes)

