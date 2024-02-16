import {Request, Response, Router} from 'express'
import { ADMIN_USER, USER } from './const'

const routes = Router()

routes.get('/healthcheck', (_: Request, res: Response) => {
    res.status(200)
    .json({
        message: 'Mock Server running'
    })
})

routes.get('/v1/auth/refresh/:id', (req: Request, res: Response) => {
    res.status(200)
    .json(req.params.id === ADMIN_USER.tokens.accessToken ? ADMIN_USER : USER)
})

routes.post('/v1/auth', (req: Request, res: Response) => {
    res.status(200)
    .json(req.body.email === ADMIN_USER.user.email ? ADMIN_USER : USER)
})

routes.post('/v1/signup', (req: Request, res: Response) => {
    res.status(204).json()
})



export default routes
