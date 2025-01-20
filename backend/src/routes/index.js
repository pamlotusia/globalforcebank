import {Router} from 'express'
import {userRoutes} from '../routes/users.routes.js'

export const routes = Router();
routes.use('/users',userRoutes)

