import {Request, Response, Router} from 'express'

const routes = Router()

routes.get('/healthcheck', (_: Request, res: Response) => {
    res.status(200)
    .json({
        message: 'Mock Server running'
    })
})

routes.post('/v1/auth', (req: Request, res: Response) => {
    res.status(200)
    .json({
        user: {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "John Doe",
            email: "johnDoe@email.com",
            userType: "user",
            createdAt: "2020-01-01T00:00:00.000Z"
        },
        tokens: {
            accessToken: "<jwt access token>"
        }
    })
})

routes.post('/v1/signup', (req: Request, res: Response) => {
    res.status(204).json()
})

export default routes
