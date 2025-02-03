import {Router} from 'express'

import {userRoutes} from './users.routes.js'
import { emitterRoutes } from './emissor.routes.js'
import { sessionRouter } from './sessions.routes.js';

export const routes = Router();
routes.use('/users',userRoutes)
routes.use('/emitters', emitterRoutes)
routes.use('/session', sessionRouter )

