import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { IUserCreate } from '../interfaces';

export default async (req:Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization)
    const authheader = req.headers.authorization;
    if(!authheader){
      return res.status(500).json({
        error: true,
        message: "falta enviar headers na requisiçao"
      })
    }
    //example Bearer 1234356
    const token = authheader.split(" ")

    try{
        const decoded = jwt.verify(String(token[1]),String(process.env.secret)) as IUserCreate
        //@ts-ignore
        req.user = decoded
         //@ts-ignore
        console.log(req.user)
        next()
      }catch(e) {
        console.warn(e)
        return res.status(500).json({
          error: true,
          message: "OCORREU UM ERRO INESPERADO"
        })
      }
}