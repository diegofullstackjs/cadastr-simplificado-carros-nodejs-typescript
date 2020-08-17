import dotenv from 'dotenv'
import path from 'path'
import express, { Application, } from 'express';
dotenv.config({path: path.resolve(__dirname,"env",".env.example")})
import bodyparser from 'body-parser'
import './database/index'

//Importando as rotas
import UserRouter from './router/user.router'
import CarsRouter from './router/cars.router'

const server: Application = express();

server.use(bodyparser.json({}))
server.use(bodyparser.urlencoded({extended: true}))

server.use("/user",UserRouter)
server.use("/cars",CarsRouter)
server.listen(process.env.PORT || 3000,() => {
    console.log("SERVER IS RUNNING")
})