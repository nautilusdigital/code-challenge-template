import express, { json } from 'express'
import cors from 'cors'
import routes from './routes'

const server = express()

server.use(json())
server.use(cors())
server.use(routes)

export default server
