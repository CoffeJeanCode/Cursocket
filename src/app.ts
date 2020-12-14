import { config } from 'dotenv'
config()

import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'
import router from './routes'
import socket from './sockets'

// Initializations
const app = express()
const server = createServer(app)
const io = new Server(server)

// Settings
app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// routes
app.use(router)

// staics
app.use(express.static(path.join(__dirname, 'public')))

// socket
io.on('connection', socket)

export { app, server }
